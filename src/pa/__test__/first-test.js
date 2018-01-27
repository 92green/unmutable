// @flow
import first from '../first';
import compare from '../../internal/compare';

compare({
    name: `first() should get first object item`,
    item: {a:1,b:2,c:3},
    fn: first()
});

compare({
    name: `first() should get first object item of nothing`,
    item: {},
    fn: first()
});

compare({
    name: `first() should get first array item`,
    item: [1,2,3],
    fn: first()
});

compare({
    name: `first() should get first array item of nothing`,
    item: [],
    fn: first()
});
