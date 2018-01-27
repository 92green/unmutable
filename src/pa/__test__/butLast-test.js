// @flow
import butLast from '../butLast';
import compare from '../../internal/compare';

compare({
    name: `butLast() should do its object thing`,
    item: {a:1,b:2,c:3},
    fn: butLast(),
    toJS: true
});

compare({
    name: `butLast() should do its object thing on empty`,
    item: {},
    fn: butLast(),
    toJS: true
});

compare({
    name: `butLast() should do its array thing`,
    item: [1,2,3],
    fn: butLast(),
    toJS: true
});

compare({
    name: `butLast() should do its array thing on empty`,
    item: [],
    fn: butLast(),
    toJS: true
});
