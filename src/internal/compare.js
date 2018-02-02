// @flow
import test from 'ava';
import {fromJS, Record} from 'immutable';
import isPlainObject from '../util/isPlainObject';
import isRecord from '../util/isRecord';

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
    toJS?: boolean // a boolean indicating whether the result of performing the function on fromJS(item) will need to be turned back into plain javascript for comparison
};

export default ({item, name, fn, toJS}: CompareConfig) => {
    let plainify = toJS
        ? ii => ii.toJS()
        : ii => ii;

    test(name, (tt: *) => {
        tt.deepEqual(
            plainify(fn(fromJS(item))),
            fn(item)
        );
    });

    // if value is an object, make sure that it also works on Records
    // if(isPlainObject(item)) {
    //     test(`Record test: ${name}`, (tt: *) => {
    //         let plainResult = fn(item);
    //         let recordResult = fn(new MyRecord(item));

    //         if(isRecord(recordResult)) {
    //             recordResult = recordResult.toObject();
    //             plainResult = {
    //                 ...defaultValues,
    //                 ...plainResult
    //             };
    //         }
    //         tt.deepEqual(plainResult, recordResult);
    //     });
    // }
};
