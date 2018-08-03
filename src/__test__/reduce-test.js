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
