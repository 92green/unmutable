// @flow
import shift from '../shift';
import compare from '../internal/compare';

compare({
    name: `shift() should do its thing`,
    item: [1,2,3],
    fn: shift(),
    toJS: true
});

compare({
    name: `shift() should do its thing on empty`,
    item: [],
    fn: shift(),
    toJS: true
});
