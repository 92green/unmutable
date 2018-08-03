// @flow
import isNotEmpty from '../isNotEmpty';
import {fromJS, Record} from 'immutable';

test(`isNotEmpty() should work on objects`, () => {
    expect(isNotEmpty()({})).toBe(false);
    expect(isNotEmpty()({a:1})).toBe(true);
});

test(`isNotEmpty() should work on arrays`, () => {
    expect(isNotEmpty()([])).toBe(false);
    expect(isNotEmpty()([1,2,3])).toBe(true);
});

test(`isNotEmpty() should work on Maps`, () => {
    expect(isNotEmpty()(fromJS({}))).toBe(false);
    expect(isNotEmpty()(fromJS({a:1}))).toBe(true);
});

test(`isNotEmpty() should work on Lists`, () => {
    expect(isNotEmpty()(fromJS([]))).toBe(false);
    expect(isNotEmpty()(fromJS([1,2,3]))).toBe(true);
});

test(`isNotEmpty() should work on Records`, () => {
    let R = Record({a: "empty"});
    expect(isNotEmpty()(new R({}))).toBe(false);
    expect(isNotEmpty()(new R({a: "?"}))).toBe(true);
});
