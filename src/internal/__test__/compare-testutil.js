// @flow
import { fromJS, Record } from 'immutable';
import {isRecord} from '../predicates';

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
    record?: boolean // set to true to also test against Immutable.js Records
};

export default ({item, name, fn, toJS, record}: CompareConfig) => {
    let plainify = toJS
        ? ii => ii.toJS()
        : ii => ii;

    test(name, () => {
        expect(plainify(fn(fromJS(item)))).toEqual(fn(item));
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
            expect(plainResult).toEqual(recordResult);
        });
    }
};
