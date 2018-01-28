// @flow
import rest from '../rest';
import compare from '../../internal/compare';

compare({
    name: `rest() should do its object thing`,
    item: {a:1,b:2,c:3},
    fn: rest(),
    toJS: true
});

compare({
    name: `rest() should do its object thing on empty`,
    item: {},
    fn: rest(),
    toJS: true
});


compare({
    name: `rest() should do its array thing`,
    item: [1,2,3],
    fn: rest(),
    toJS: true
});

compare({
    name: `rest() should do its array thing on empty`,
    item: [],
    fn: rest(),
    toJS: true
});
