// @flow
import {Map, List} from 'immutable';
import mergeDeep from '../mergeDeep';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `mergeDeep() should merge an object`,
    item: {a:1,b:2},
    fn: mergeDeep({b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeDeep() should merge multiple objects`,
    item: {a:1,b:2},
    fn: mergeDeep({b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `mergeDeep() should merge objects and maps`,
    item: {a:1,b:2},
    fn: mergeDeep({b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compare({
    name: `mergeDeep() should merge objects deeply`,
    item: {a:{x:{d:1}},b:{x:1}},
    fn: mergeDeep({b:{x:{e:7}, y:3}, c:4}),
    toJS: true
});

compare({
    name: `mergeDeep() should merge objects containing arrays deeply`,
    item: {a:[1,2,3]},
    fn: mergeDeep({a:[4,5,6]}),
    toJS: true
});
