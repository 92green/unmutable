// @flow
import test from 'ava';
import {Record} from 'immutable';
import reduce from '../reduce';
import compare from '../../internal/compare';
import compareIteratee from '../../internal/compareIteratee';

compare({
    name: `reduce() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduce((reduction, value) => [...reduction, value], []),
    record: true
});

compareIteratee({
    name: `reduce() on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => reduce((reduction: *, value: *, key: *, iter: *): Array<*> => {
        checkArgs({reduction, value, key, iter});
        return [...reduction, value];
    }, []),
    argsToJS: ['iter']
});

compare({
    name: `reduce() on array should work`,
    item:[1,2,3,4],
    fn: reduce((reduction, value) => [value, ...reduction], [])
});

compareIteratee({
    name: `reduce() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => reduce((reduction: *, value: *, key: *, iter: *): Array<*> => {
        checkArgs({reduction, value, key, iter});
        return [value, ...reduction];
    }, []),
    argsToJS: ['iter']
});


//
// Records
//

test('reduce() on should pass correct arguments to iteratee', (t: *) => {
    const data = new TestRecord();

    reduce((reduction, item, key, record) => {
        t.is(reduction, 1);
        t.is(item, 'bar');
        t.is(key, 'foo');
        t.is(record, data);
        return reduction;
    }, 1)(data);
});
