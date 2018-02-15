// @flow
import pop from '../pop';
import compare from '../../internal/compare';

compare({
    name: `pop() should do its thing`,
    item: [1,2,3],
    fn: pop(),
    toJS: true
});

compare({
    name: `pop() should do its thing on empty`,
    item: [],
    fn: pop(),
    toJS: true
});
