// @flow
import test from 'ava';
import isNotEmpty from '../isNotEmpty';
import {fromJS, Record} from 'immutable';

test(`isNotEmpty() should work on objects`, (tt: *) => {
    tt.false(isNotEmpty()({}));
    tt.true(isNotEmpty()({a:1}));
});

test(`isNotEmpty() should work on arrays`, (tt: *) => {
    tt.false(isNotEmpty()([]));
    tt.true(isNotEmpty()([1,2,3]));
});

test(`isNotEmpty() should work on Maps`, (tt: *) => {
    tt.false(isNotEmpty()(fromJS({})));
    tt.true(isNotEmpty()(fromJS({a:1})));
});

test(`isNotEmpty() should work on Lists`, (tt: *) => {
    tt.false(isNotEmpty()(fromJS([])));
    tt.true(isNotEmpty()(fromJS([1,2,3])));
});

test(`isNotEmpty() should work on Records`, (tt: *) => {
    let R = Record({a: "empty"});
    tt.false(isNotEmpty()(new R({})));
    tt.true(isNotEmpty()(new R({a: "?"})));
});
