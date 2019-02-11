// @flow
import remove from '../remove';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `remove() removes a value`,
    item: {a:1, b:2},
    fn: remove('a'),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `remove() removes a value that doesnt exist`,
    item: {a:1, b:2},
    fn: remove('z'),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `remove() removes an index`,
    item: [1,2,3],
    fn: remove(2),
    toJS: true
});

compare({
    name: `remove() removes a negative index`,
    item: [1,2,3],
    fn: remove(-1),
    toJS: true
});

compare({
    name: `remove() removes an index that doesnt exist`,
    item: [1,2,3],
    fn: remove(3),
    toJS: true
});
