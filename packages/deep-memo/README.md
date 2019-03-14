# deep-memo

A memoize-one function that analyses the function output and retains previous object references wherever data hasn't changed.

Deep memo only caches the result of the most recent arguments. In addition to this, if the function is called with a different set of arguments, the result is analysed to identify parts of the returned data structure that haven't changed. For all parts of the data structure that haven't changed, `deepMemo` reuses the same objects and arrays from the last invocation. This allows strict equality check to be used downstream to tell if items have changed value or not.

Internally `deepMemo` uses [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) for equality checking by value, and [unmutable](http://unmutable.blueflag.codes) for the iteration and replace operations on the result.

## Example

```js
import deepMemo from 'deep-memo';

let parseJson = (str) => JSON.parse(str);
let parseJsonMemoized = deepMemo(parseJson);

// call parseJsonMemoized

let firstCall = parseJsonMemoized(`{"foo":[1,2,3], "bar":[4,5,6]}`);

// calls parseJson and returns:
// {
//     foo: [1,2,3],
//     bar: [4,5,6]
// }

// call parseJsonMemoized again

let secondCall = parseJsonMemoized(`{"foo":[1,2,3], "bar":[4,5,6]}`);

// returns output from cache (fast!) and returns:
// {
//     foo: [1,2,3],
//     bar: [4,5,6]
// }

// call parseJsonMemoized with different nested data

let thirdCall = parseJsonMemoized(`{"foo":[1,2,3], "bar":[4,5,7]}`);

// calls parseJson and returns:
// {
//     foo: [1,2,3],
//     bar: [4,5,7]
// }

let hasFooChanged = secondCall.foo !== thirdCall.foo; // returns false
let hassBarChanged = secondCall.bar !== thirdCall.bar; // returns true

```

## Packages

```sh
yarn add deep-memo
```
