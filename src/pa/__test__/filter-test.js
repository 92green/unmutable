// @flow
import test from 'ava';
import {Record} from 'immutable';
import filter from '../filter';
import compare from '../../internal/compare';
import compareIteratee from '../../internal/compareIteratee';

compare({
    name: `filter() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: filter(value => value % 2 === 0),
    toJS: true,
    record: true
});

compareIteratee({
    name: `filter() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => filter((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});

compare({
    name: `filter() on array should work`,
    item: [1,2,3,4],
    fn: filter(value => value % 2 === 0),
    toJS: true
});

compareIteratee({
    name: `filter() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => filter((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return true;
    }),
    argsToJS: ['iter']
});


//
// Records
//

test('filter() on should pass correct arguments to iteratee', (t: *) => {
    const data = new TestRecord({foo: 'baz'});

    filter((value, key, record) => {
        t.is(key, 'foo');
        t.is(value, 'baz');
        t.is(record, data);
    })(data);
});
