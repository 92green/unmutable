// @flow
import {Map, List} from 'immutable';
import merge from '../merge';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `merge() object should merge an object`,
    item: {a:1,b:2},
    fn: merge({b:6,c:3}),
    toJS: true
});

compare({
    name: `merge() object should merge multiple objects`,
    item: {a:1,b:2},
    fn: merge({b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `merge() object should merge objects and maps`,
    item: {a:1,b:2},
    fn: merge({b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compare({
    name: `merge() array should merge an array`,
    item: [1,2,3],
    fn: merge([4,5,6]),
    toJS: true
});

compare({
    name: `merge() array should merge multiple arrays`,
    item: [1,2,3],
    fn: merge([4,5,6],[7,8]),
    toJS: true
});

compare({
    name: `merge() array should merge arrays and lists`,
    item: [1,2,3],
    fn: merge([4,5,6],List([7,8])),
    toJS: true
});
