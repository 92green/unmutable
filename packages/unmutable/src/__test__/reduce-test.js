// @flow
import { Record } from 'immutable';
import reduce from '../reduce';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `reduce() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduce((reduction, value) => [...reduction, value], []),
    record: true
});

compare({
    name: `reduce() on object should work when only one item`,
    item: {a:1},
    fn: reduce((reduction, value) => [...reduction, value], [])
});

compare({
    name: `reduce() on object should work when empty`,
    item: {},
    fn: reduce((reduction, value) => [...reduction, value], [])
});

compare({
    name: `reduce() on object should work without initial reduction`,
    item: {a:1, b:2, c:3, d:4},
    fn: reduce((a, b) => a - b)
});

compare({
    name: `reduce() on object should work without initial reduction when only one item`,
    item: {a: 1},
    fn: reduce((a, b) => a - b)
});


compare({
    name: `reduce() on object should work without initial reduction when empty`,
    item: {},
    fn: reduce((a, b) => a - b)
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

compare({
    name: `reduce() on array should work without initial reduction`,
    item:[1,2,3,4],
    fn: reduce((a, b) => a - b)
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

const TestRecord = Record({foo: 'bar'});
test('reduce() on should pass correct arguments to iteratee', () => {
    const data = new TestRecord();

    reduce((reduction, item, key, record) => {
        expect(reduction).toBe(1);
        expect(item).toBe('bar');
        expect(key).toBe('foo');
        expect(record).toBe(data);
        return reduction;
    }, 1)(data);
});
