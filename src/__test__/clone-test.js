// @flow
import clone from '../clone';
import {fromJS} from 'immutable';
import UnmutableCompatible from '../internal/__test__/UnmutableCompatible-testutil';

test(`clone() on object should work`, () => {
    let obj = {a:4, b:6};
    expect(obj).toEqual(clone()(obj));
    expect(obj).not.toBe(clone()(obj));
});

test(`clone() on Map should pass through`, () => {
    let map = fromJS({a:1, b:2});
    expect(map).toBe(clone()(map));
});

test(`clone() on array should work`, () => {
    let arr = [1,2,3];
    expect(arr).toEqual(clone()(arr));
    expect(arr).not.toBe(clone()(arr));
});

test(`clone() on List should pass through`, () => {
    let list = fromJS([1,2,3]);
    expect(list).toBe(clone()(list));
});

test(`clone() on unnmutable compatible should work`, () => {
    let uc = new UnmutableCompatible();
    expect(uc.toObject()).toEqual(clone()(uc).toObject());
    expect(uc).not.toBe(clone()(uc));
});
