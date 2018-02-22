// @flow
import update from '../update';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

// 1 argument

compare({
    name: `update() without key should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: update(value => 2)
});

compareIteratee({
    name: `update() without key should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => update((value: *): number => {
        checkArgs({value});
        return 2;
    }),
    argsToJS: ['value']
});

// 2 arguments

compare({
    name: `update() key on object should work`,
    item: {a:1, b:2, c:3, d:4},
    fn: update('a', value => value * 2),
    toJS: true
});

compareIteratee({
    name: `update() key on object should pass correct arguments to iteratee`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => update('a', (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});

compare({
    name: `update() key on object should work with wrong key`,
    item: {a:1, b:2, c:3, d:4},
    fn: update('z', value => value * 2),
    toJS: true
});

compareIteratee({
    name: `update() key on object should pass correct arguments to iteratee with wrong key`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => update('z', (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});

compare({
    name: `update() key on array should work`,
    item: [1,2,3,4],
    fn: update(1, value => value * 2),
    toJS: true
});

compare({
    name: `update() negative key on array should work`,
    item: [1,2,3,4],
    fn: update(-1, value => value * 2),
    toJS: true
});


compareIteratee({
    name: `update() on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => update(1, (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});

compare({
    name: `update() wrong key on array should work`,
    item: [1,2,3,4],
    fn: update(10, value => value * 2),
    toJS: true
});


compareIteratee({
    name: `update() wrong key on array should pass correct arguments to iteratee`,
    item: [1,2,3,4],
    fn: (checkArgs) => update(10, (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});

// 3 arguments

compare({
    name: `update() key on object should work with wrong key and notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: update('z', 100, value => value * 2),
    toJS: true
});

compareIteratee({
    name: `update() key on object should pass correct arguments to iteratee with wrong key and notSetValue`,
    item: {a:1, b:2, c:3, d:4},
    fn: (checkArgs) => update('z', 100, (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});

compare({
    name: `update() wrong key on array should work with notSetValue`,
    item: [1,2,3,4],
    fn: update(10, 100, value => value * 2),
    toJS: true
});

compareIteratee({
    name: `update() wrong key on array should pass correct arguments to iteratee with notSetValue`,
    item: [1,2,3,4],
    fn: (checkArgs) => update(10, 100, (value: *): boolean => {
        checkArgs({value});
        return value;
    })
});
