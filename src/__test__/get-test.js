// @flow
import get from '../get';
import compare from '../internal/__test__/compare-testutil';
import {Record} from 'immutable';

compare({
    name: `get() finds a value`,
    item: {a:1, b:2},
    fn: get('a'),
    record: true
});

compare({
    name: `get() doesnt find a value`,
    item: {a:1, b:2},
    fn: get('z'),
    record: true
});

compare({
    name: `get() doesnt find a value with a notSetValue`,
    item: {a:1, b:2},
    fn: get('z', '!'),
    record: true
});

compare({
    name: `get() finds an index`,
    item: [1,2,3],
    fn: get(2)
});

compare({
    name: `get() finds a negative index`,
    item: [1,2,3],
    fn: get(-1)
});

compare({
    name: `get() doesnt find an index`,
    item: [1,2,3],
    fn: get(3)
});

compare({
    name: `get() finds a negative index with a notSetValue`,
    item: [1,2,3],
    fn: get(-1, '!')
});

compare({
    name: `get() doesnt find an index with a notSetValue`,
    item: [1,2,3],
    fn: get(3, '!')
});

test('get() on record should work', () => {
    const TestRecord = Record({foo: 'bar'});
    expect(get('foo')(new TestRecord())).toBe('bar');
});

test('get() on class instance should work', () => {
    class A {
        foo = 'bar';
    }
    expect(get('foo')(new A())).toBe('bar');
});

test('get() on function should work', () => {
    let fn = () => {};
    fn.foo = 'bar';
    expect(get('foo')(fn)).toBe('bar');
});

