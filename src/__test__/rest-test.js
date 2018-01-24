// @flow
import rest from '../rest';
import compare from '../internal/compare';

compare({
    name: `rest() should do its thing`,
    item: [1,2,3],
    fn: rest(),
    toJS: true
});

compare({
    name: `rest() should do its thing on empty`,
    item: [],
    fn: rest(),
    toJS: true
});
