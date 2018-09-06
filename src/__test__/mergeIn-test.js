// @flow
import {Map, List} from 'immutable';
import mergeIn from '../mergeIn';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `mergeIn() object should mergeIn an object`,
    item: {z:{a:1,b:2}},
    fn: mergeIn(['z'], {b:6,c:3}),
    toJS: true
});

compare({
    name: `mergeIn() object should mergeIn multiple objects`,
    item: {z:{a:1,b:2}},
    fn: mergeIn(['z'], {b:6,c:3}, {c:4,e:7}),
    toJS: true
});

compare({
    name: `mergeIn() object should mergeIn objects and maps`,
    item: {z:{a:1,b:2}},
    fn: mergeIn(['z'], {b:6,c:3}, Map({c:4,e:7})),
    toJS: true
});

compare({
    name: `mergeIn() array should mergeIn an array`,
    item: {z:[1,2,3]},
    fn: mergeIn(['z'], [4,5,6]),
    toJS: true
});

compare({
    name: `mergeIn() array should mergeIn multiple arrays`,
    item: {z:[1,2,3]},
    fn: mergeIn(['z'], [4,5,6],[7,8]),
    toJS: true
});

compare({
    name: `mergeIn() array should mergeIn arrays and lists`,
    item: {z:[1,2,3]},
    fn: mergeIn(['z'], [4,5,6],List([7,8])),
    toJS: true
});
