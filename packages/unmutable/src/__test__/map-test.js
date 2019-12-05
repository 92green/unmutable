// @flow
import { Record } from 'immutable';
import map from '../map';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `map() on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: map(value => value * 2),
    toJS: true,
    record: true,
    of: true
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
    toJS: true,
    of: true
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

const TestRecord = Record({foo: 'bar'});
test('map() on should pass correct arguments to iteratee', () => {
    const data = new TestRecord({foo: 'baz'});

    map((value, key, record) => {
        expect(key).toBe('foo');
        expect(value).toBe('baz');
        expect(record).toBe(data);
    })(data);
});
