// @flow
import {Map, List} from 'immutable';
import mergeDeepIn from '../mergeDeepIn';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `mergeDeepIn() should merge an object`,
    item: {z:{a:1,b:2}},
    fn: mergeDeepIn(['z'],{b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeDeepIn() should merge multiple objects`,
    item: {z:{a:1,b:2}},
    fn: mergeDeepIn(['z'], {b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `mergeDeepIn() should merge objects and maps`,
    item: {z:{a:1,b:2}},
    fn: mergeDeepIn(['z'], {b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compare({
    name: `mergeDeepIn() should merge objects deeply`,
    item: {z:{a:{x:{d:1}},b:{x:1}}},
    fn: mergeDeepIn(['z'], {b:{x:{e:7}, y:3}, c:4}),
    toJS: true
});

compare({
    name: `mergeDeepIn() should merge objects containing arrays deeply`,
    item: {z:{a:[1,2,3]}},
    fn: mergeDeepIn(['z'], {a:[4,5,6]}),
    toJS: true
});

compare({
    name: `mergeDeepIn() should merge objects containing arrays double deeply`,
    item: {z:{y:{a:[1,2,3]}}},
    fn: mergeDeepIn(['z','y'], {a:[4,5,6]}),
    toJS: true
});
