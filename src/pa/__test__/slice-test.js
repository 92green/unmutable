// @flow
import slice from '../slice';
import compare from '../../internal/compare';

compare({
    name: `slice() should slice an item with no args`,
    item: [1,2,3],
    fn: slice(),
    toJS: true
});

compare({
    name: `slice() should slice an item with 1 args`,
    item: [1,2,3],
    fn: slice(1),
    toJS: true
});

compare({
    name: `slice() should slice an item with 2 args`,
    item: [1,2,3],
    fn: slice(1, 2),
    toJS: true
});

compare({
    name: `slice() should slice an item with 1 negative args`,
    item: [1,2,3],
    fn: slice(-1),
    toJS: true
});

compare({
    name: `slice() should slice an item with 2 negative args`,
    item: [1,2,3],
    fn: slice(-2, -1),
    toJS: true
});
