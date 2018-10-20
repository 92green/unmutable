// @flow
import cycle from '../cycle';
import {fromJS} from 'immutable';

test(`cycle() on array should work`, () => {
    expect(cycle(0)([0,1,2,3])).toEqual([0,1,2,3]);
    expect(cycle(1)([0,1,2,3])).toEqual([1,2,3,0]);
    expect(cycle(3)([0,1,2,3])).toEqual([3,0,1,2]);
    expect(cycle(4)([0,1,2,3])).toEqual([0,1,2,3]);
    expect(cycle(-1)([0,1,2,3])).toEqual([3,0,1,2]);
});

test(`cycle() on List should work`, () => {
    expect(cycle(0)(fromJS([0,1,2,3])).toJS()).toEqual([0,1,2,3]);
    expect(cycle(1)(fromJS([0,1,2,3])).toJS()).toEqual([1,2,3,0]);
    expect(cycle(3)(fromJS([0,1,2,3])).toJS()).toEqual([3,0,1,2]);
    expect(cycle(4)(fromJS([0,1,2,3])).toJS()).toEqual([0,1,2,3]);
    expect(cycle(-1)(fromJS([0,1,2,3])).toJS()).toEqual([3,0,1,2]);
});
