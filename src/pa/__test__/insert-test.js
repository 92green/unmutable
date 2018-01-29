// @flow
import insert from '../insert';
import compare from '../../internal/compare';

compare({
    name: `insert() should insert an item`,
    item: [1,2,3],
    fn: insert(1, 4),
    toJS: true
});

compare({
    name: `insert() should insert an item at the end`,
    item: [1,2,3],
    fn: insert(3, 4),
    toJS: true
});

compare({
    name: `insert() should insert an at negative index`,
    item: [1,2,3],
    fn: insert(-1, 5),
    toJS: true
});
