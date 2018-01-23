// @flow
import test from 'ava';
import {fromJS} from 'immutable';

export default ({item, name, fn, toJS}) => {
    let plainify = toJS
        ? ii => ii.toJS()
        : ii => ii;

    test(name, (tt: *) => {
        tt.deepEqual(
            fn(item),
            plainify(fn(fromJS(item)))
        );
    });
};
