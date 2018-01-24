// @flow
import test from 'ava';
import {fromJS} from 'immutable';

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
};
