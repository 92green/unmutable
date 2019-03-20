// @flow
import deepMemo from '../deepMemo';

let stringMyArgsPlease = (...args) => args.map(arg => `${arg}`).join("-");

test(`deepMemo should return correct result`, () => {
    let fn = jest.fn(stringMyArgsPlease);
    let fnMemoized = deepMemo(fn);

    expect(fnMemoized(1,2)).toBe(`1-2`);
});

test(`deepMemo should memoize`, () => {

    let fn = jest.fn(stringMyArgsPlease);
    let fnMemoized = deepMemo(fn);

    let result1 = fnMemoized(1,2);
    let result2 = fnMemoized(1,2);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(result1).toEqual(result2);
});

test(`deepMemo should return new result if new args are passed`, () => {

    let fn = jest.fn(stringMyArgsPlease);
    let fnMemoized = deepMemo(fn);

    fnMemoized(1,2);
    let result2 = fnMemoized(1,2,3);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(result2).toEqual(`1-2-3`);
});

test(`deepMemo should retain previous object references wherever data hasn't changed`, () => {

    let parseJson = (str) => JSON.parse(str);
    let parseJsonMemoized = deepMemo(parseJson);

    let result1 = parseJsonMemoized(`{"foo":[1,2,3], "bar":[4,5,[6,7]]}`);
    let result2 = parseJsonMemoized(`{"foo":[1,2,3], "bar":[4,55,[6,7]]}`);

    expect(result1 === result2).toBe(false);
    expect(result1.foo === result2.foo).toBe(true);
    expect(result1.bar === result2.bar).toBe(false);
    expect(result1.bar[0] === result2.bar[0]).toBe(true);
    expect(result1.bar[1] === result2.bar[1]).toBe(false);
    expect(result1.bar[2] === result2.bar[2]).toBe(true);
});
