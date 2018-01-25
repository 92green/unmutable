// @flow
import first from '../first';
import compare from '../../internal/compare';

compare({
    name: `first() should get first item`,
    item: [1,2,3],
    fn: first()
});

compare({
    name: `first() should get first item of nothing`,
    item: [],
    fn: first()
});
