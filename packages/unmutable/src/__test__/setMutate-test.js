// @flow
import setMutate from '../setMutate';
import UnmutableCompatible from '../internal/__test__/UnmutableCompatible-testutil';

test(`setMutate() should set on object with mutations`, () => {

    let value = {a: 123, b: 456};
    let newValue = setMutate('c', 789)(value);

    expect(value).toEqual({a: 123, b: 456, c: 789});
    expect(newValue).toEqual({a: 123, b: 456, c: 789});
});

test(`setMutate() should set on object with mutations on existing key`, () => {

    let value = {a: 123, b: 456};
    let newValue = setMutate('a', 789)(value);

    expect(value).toEqual({a: 789, b: 456});
    expect(newValue).toEqual({a: 789, b: 456});
});

test(`setMutate() should set on array with mutations`, () => {

    let value = [1,2,3];
    let newValue = setMutate(1, 4)(value);

    expect(value).toEqual([1,4,3]);
    expect(newValue).toEqual([1,4,3]);
});

test(`setMutate() should set on array with mutations on new index`, () => {

    let value = [1,2,3];
    let newValue = setMutate(3, 4)(value);

    expect(value).toEqual([1,2,3,4]);
    expect(newValue).toEqual([1,2,3,4]);
});

test(`setMutate() should set on array with mutations with negative index`, () => {

    let value = [1,2,3];
    let newValue = setMutate(-2, 4)(value);

    expect(value).toEqual([1,4,3]);
    expect(newValue).toEqual([1,4,3]);
});

test(`deleteMutate() should delete unmutable compatible`, () => {

    let value = new UnmutableCompatible({
        abc: 123,
        def: 456
    });

    let newValue = setMutate('abc', 789)(value);

    expect(newValue.get('abc')).toBe(789);
    expect(newValue.get('def')).toBe(456);
});
