// @flow
import merge from '../merge';
import compare from '../../internal/compare';

compare({
    name: `merge() object should merge an object`,
    item: {a:1,b:2},
    fn: merge({b:6,c:3}),
    toJS: true
});
