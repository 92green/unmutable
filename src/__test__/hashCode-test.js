// @flow
import hashCode from '../hashCode';
import {fromJS} from 'immutable';
import {Record} from 'immutable';

test(`hashCode() on object should work`, () => {
    let hashCode1 = hashCode()({a:1, b:2, c:3});
    let hashCode2 = hashCode()({a:1, b:2, c:3});
    let hashCode3 = hashCode()({a:1, b:2, c:4});
    expect(hashCode1).toBe(hashCode2);
    expect(hashCode1).not.toBe(hashCode3);
});

test(`hashCode() on array should work`, () => {
    let hashCode1 = hashCode()([1,2,3]);
    let hashCode2 = hashCode()([1,2,3]);
    let hashCode3 = hashCode()([1,2,3,undefined]);
    expect(hashCode1).toBe(hashCode2);
    expect(hashCode1).not.toBe(hashCode3);
});

test(`hashCode() on map should work`, () => {
    let hashCode1 = hashCode()(fromJS({a:1, b:2, c:3}));
    let hashCode2 = hashCode()(fromJS({a:1, b:2, c:3}));
    let hashCode3 = hashCode()(fromJS({a:1, b:2, c:4}));
    expect(hashCode1).toBe(hashCode2);
    expect(hashCode1).not.toBe(hashCode3);
});

test(`hashCode() on list should work`, () => {
    let hashCode1 = hashCode()(fromJS([1,2,3]));
    let hashCode2 = hashCode()(fromJS([1,2,3]));
    let hashCode3 = hashCode()(fromJS([1,2,3,undefined]));
    expect(hashCode1).toBe(hashCode2);
    expect(hashCode1).not.toBe(hashCode3);
});
