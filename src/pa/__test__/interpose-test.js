// @flow
import interpose from '../interpose';
import compare from '../../internal/compare';

compare({
    name: `interpose() should do its thing`,
    item: [1,2,3],
    fn: interpose(0),
    toJS: true
});

compare({
    name: `interpose() should do its thing on empty`,
    item: [],
    fn: interpose(),
    toJS: true
});
