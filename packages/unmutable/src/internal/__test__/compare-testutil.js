// @flow
import { fromJS, Record } from 'immutable';
import {isRecord} from '../immutableJsPredicates';
import {isUnmutableCompatible} from '../unmutablePredicates';
import UnmutableCompatible from './UnmutableCompatible-testutil';

let defaultValues = {
    a: null,
    b: null,
    c: null,
    d: null
};

let MyRecord = Record(defaultValues);

type CompareConfig = {
    item: *, // the input item to test, in plain javascript.
    name: string, // the name of the test
    fn: Function, // the function to test
    toJS?: boolean, // a boolean indicating whether the result of performing the function on fromJS(item) will need to be turned back into plain javascript for comparison
    record?: boolean, // set to true to also test against Immutable.js Records
    unmutableCompatible?: boolean, // set to true to also test against the Unmutable compatible class testutil
};

export default ({item, name, fn, toJS, record, unmutableCompatible}: CompareConfig) => {
    let plainify = toJS
        ? ii => ii.toJS()
        : ii => ii;

    let stringified = JSON.stringify(item);

    test(name, () => {
        expect(fn(item)).toEqual(plainify(fn(fromJS(item))));
    });

    test(name + " and not mutate", () => {
        expect(JSON.stringify(item)).toBe(stringified);
    });

    if(record) {
        test(`Record test: ${name}`, () => {
            let plainResult = fn(item);
            let recordResult = fn(new MyRecord(item));

            if(isRecord(recordResult)) {
                recordResult = recordResult.toObject();
                plainResult = {
                    ...defaultValues,
                    ...plainResult
                };
            }
            expect(recordResult).toEqual(plainResult);
        });
    }

    if(unmutableCompatible) {
        test(`Unmutable compatible test: ${name}`, () => {
            let plainResult = fn(item);
            let ucResult = fn(new UnmutableCompatible(item));

            if(isUnmutableCompatible(ucResult)) {
                ucResult = ucResult.toObject();
            }
            expect(ucResult).toEqual(plainResult);
        });
    }
};
