// @flow
import slice from '../slice';
import compare from '../../internal/compare';

compare({
    name: `slice() should slice an object with no args`,
    item: {a:1,b:2,c:3},
    fn: slice(),
    toJS: true
});

compare({
    name: `slice() should slice an object with 1 args`,
    item: {a:1,b:2,c:3},
    fn: slice(1),
    toJS: true
});

compare({
    name: `slice() should slice an object with 2 args`,
    item: {a:1,b:2,c:3},
    fn: slice(1, 2),
    toJS: true
});

compare({
    name: `slice() should slice an object with 1 negative args`,
    item: {a:1,b:2,c:3},
    fn: slice(-1),
    toJS: true
});

compare({
    name: `slice() should slice an object with 2 negative args`,
    item: {a:1,b:2,c:3},
    fn: slice(-2, -1),
    toJS: true
});

compare({
    name: `slice() should slice an array with no args`,
    item: [1,2,3],
    fn: slice(),
    toJS: true
});

compare({
    name: `slice() should slice an array with 1 args`,
    item: [1,2,3],
    fn: slice(1),
    toJS: true
});

compare({
    name: `slice() should slice an array with 2 args`,
    item: [1,2,3],
    fn: slice(1, 2),
    toJS: true
});

compare({
    name: `slice() should slice an array with 1 negative args`,
    item: [1,2,3],
    fn: slice(-1),
    toJS: true
});

compare({
    name: `slice() should slice an array with 2 negative args`,
    item: [1,2,3],
    fn: slice(-2, -1),
    toJS: true
});
