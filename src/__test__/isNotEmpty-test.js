// @flow
import test from 'ava';
import isNotEmpty from '../isNotEmpty';
import {fromJS, Record} from 'immutable';

test(`isNotEmpty() should work on objects`, (t: *) => {
    t.false(isNotEmpty()({}));
    t.true(isNotEmpty()({a:1}));
});

test(`isNotEmpty() should work on arrays`, (t: *) => {
    t.false(isNotEmpty()([]));
    t.true(isNotEmpty()([1,2,3]));
});

test(`isNotEmpty() should work on Maps`, (t: *) => {
    t.false(isNotEmpty()(fromJS({})));
    t.true(isNotEmpty()(fromJS({a:1})));
});

test(`isNotEmpty() should work on Lists`, (t: *) => {
    t.false(isNotEmpty()(fromJS([])));
    t.true(isNotEmpty()(fromJS([1,2,3])));
});

test(`isNotEmpty() should work on Records`, (t: *) => {
    let R = Record({a: "empty"});
    t.false(isNotEmpty()(new R({})));
    t.true(isNotEmpty()(new R({a: "?"})));
});
