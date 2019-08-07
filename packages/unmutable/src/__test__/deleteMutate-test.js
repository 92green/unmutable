// @flow
import deleteMutate from '../deleteMutate';
import UnmutableCompatible from '../internal/__test__/UnmutableCompatible-testutil';

test(`deleteMutate() should delete on object with mutations`, () => {

    let value = {a: 123, b: 456};
    let newValue = deleteMutate('b')(value);

    expect(value).toEqual({a: 123});
    expect(newValue).toEqual({a: 123});
});

test(`deleteMutate() should delete on array with mutations`, () => {

    let value = [1,2,3];
    let newValue = deleteMutate(1)(value);

    expect(value).toEqual([1,3]);
    expect(newValue).toEqual([1,3]);
});

test(`deleteMutate() should delete on array with mutations with negative index`, () => {

    let value = [1,2,3];
    let newValue = deleteMutate(-2)(value);

    expect(value).toEqual([1,3]);
    expect(newValue).toEqual([1,3]);
});

test(`deleteMutate() should delete unmutable compatible`, () => {

    let value = new UnmutableCompatible({
        abc: 123,
        def: 456
    });

    let newValue = deleteMutate('abc')(value);

    expect(newValue.get('abc')).toBe(undefined);
    expect(newValue.get('def')).toBe(456);
});
