// @flow
import butLast from '../butLast';
import compare from '../internal/compare';

compare({
    name: `butLast() should do its thing`,
    item: [1,2,3],
    fn: butLast(),
    toJS: true
});

compare({
    name: `butLast() should do its thing on empty`,
    item: [],
    fn: butLast(),
    toJS: true
});
