// @flow
import test from 'ava';
import {Record} from 'immutable';
import map from '../map';
import compare from '../../internal/compare';
import compareIteratee from '../../internal/compareIteratee';

compare({
    name: `map() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: map(value => value * 2),
    toJS: true,
    record: true
});

compareIteratee({
    name: `map() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => map((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return value;
    }),
    argsToJS: ['iter']
});

compare({
    name: `map() on array should work`,
    item: [1,2,3,4],
    fn: map(value => value * 2),
    toJS: true
});

compareIteratee({
    name: `map() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => map((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return value;
    }),
    argsToJS: ['iter']
});


//
// Records
//

test('map() on should pass correct arguments to iteratee', (t: *) => {
    const data = new TestRecord({foo: 'baz'});

    map((value, key, record) => {
        t.is(key, 'foo');
        t.is(value, 'baz');
        t.is(record, data);
    })(data);
});
