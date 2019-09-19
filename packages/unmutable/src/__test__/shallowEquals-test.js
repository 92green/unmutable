// @flow
import shallowEquals from '../shallowEquals';
import {fromJS} from 'immutable';

test(`shallowEquals() should check equality one level deep`, () => {

    expect(shallowEquals([])([])).toBe(true);
    expect(shallowEquals([1, 2, 3])([1, 2, 3])).toBe(true);
    expect(shallowEquals([1, 2, 0])([1, 2, ""])).toBe(false);
    expect(shallowEquals({hello: "hi!"})({hello: "hi!"})).toBe(true);
    expect(shallowEquals({a:1,b:2})({b:2,a:1})).toBe(true);
    expect(shallowEquals([1,2,undefined])([1,2])).toBe(false);
    expect(shallowEquals([1, 2, {a: 3}])([1, 2, {a: 3}])).toBe(false);
    expect(shallowEquals([1, 2, NaN])([1, 2, NaN])).toBe(true);

    expect(shallowEquals(fromJS([]))(fromJS([]))).toBe(true);
    expect(shallowEquals(fromJS([1, 2, 3]))(fromJS([1, 2, 3]))).toBe(true);
    expect(shallowEquals(fromJS([1, 2, 0]))(fromJS([1, 2, ""]))).toBe(false);
    expect(shallowEquals(fromJS({hello: "hi!"}))(fromJS({hello: "hi!"}))).toBe(true);
    expect(shallowEquals(fromJS({a:1,b:2}))(fromJS({b:2,a:1}))).toBe(true);
    expect(shallowEquals(fromJS([1,2,undefined]))(fromJS([1,2]))).toBe(false);
    expect(shallowEquals(fromJS([1, 2, {a: 3}]))(fromJS([1, 2, {a: 3}]))).toBe(false);
    expect(shallowEquals(fromJS([1, 2, NaN]))(fromJS([1, 2, NaN]))).toBe(true);
});
