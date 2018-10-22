// @flow
import del from '../delete';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `delete() deletes a value`,
    item: {a:1, b:2},
    fn: del('a'),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `delete() deletes a value that doesnt exist`,
    item: {a:1, b:2},
    fn: del('z'),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `delete() deletes an index`,
    item: [1,2,3],
    fn: del(2),
    toJS: true
});

compare({
    name: `delete() deletes a negative index`,
    item: [1,2,3],
    fn: del(-1),
    toJS: true
});

compare({
    name: `delete() deletes an index that doesnt exist`,
    item: [1,2,3],
    fn: del(3),
    toJS: true
});
