// @flow
import {fromJS} from 'immutable';
import includes from '../includes';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `includes() on object should identify false result`,
    item: {a:1, b:2, c:3, d:4},
    fn: includes(5)
});

compare({
    name: `includes() on object should identify true result`,
    item: {a:1, b:2, c:3, d:4},
    fn: includes(3)
});

compare({
    name: `includes() on array should identify false result`,
    item: [1,2,3,4],
    fn: includes(0)
});

compare({
    name: `includes() on array should identify true result`,
    item: [1,2,3,4],
    fn: includes(4)
});

test(`includes() should identify deeply equal result`, () => {

    let data = [
        [1,2],
        [3,4],
        [5,6]
    ];

    expect(includes([1,2])(data)).toBe(true);
});

test(`includes() should identify deeply equal result with immutable.js`, () => {

    let data = fromJS([
        [1,2],
        [3,4],
        [5,6]
    ]);

    expect(includes(fromJS([1,2]))(data)).toBe(true);
});
