![unmutable](https://user-images.githubusercontent.com/345320/48247150-63529400-e446-11e8-9c42-c36821b93a16.png)

<a href="https://www.npmjs.com/package/unmutable"><img src="https://img.shields.io/npm/v/unmutable.svg?style=flat-square"></a>

An immutable, functional data collection library for plain old Javascript.

It combines my favourite parts of [immutable.js](https://facebook.github.io/immutable-js/), [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [ramdajs](https://ramdajs.com/) together.

Unmutable follows [immutable.js](https://facebook.github.io/immutable-js/)'s API almost exactly, and but exports each method individually as a [point-free function](https://en.wikipedia.org/wiki/Tacit_programming), in the same way as [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) does. These functions are all immutable, and can be composed together easily.

Unmutable also works seamlessly on plain Javascript objects and arrays, Immutable.js Maps, Lists and Records. It can also works on your own classes if you make them [unmutable-compatible](#).

## API documentation

**[See the docs](https://92green.github.io/unmutable)**

## Installation

```sh
npm install unmutable
// or
yarn add unmutable
```

Also see [deep-memo](/packages/deep-memo), a library that uses unmutable.

## Usage

*Use it in a pipe!*

```js
var data = [1,2,3];

let result = pipeWith(
    data,
    push(4),
    reverse(),
    map(num => num * 10)
);

// result is [40,30,20,10]
// wow!
```

*Use it partially applied!*

```js
var data = {
    foo: 1,
    bar: null,
    baz: 3
};

var filterNulls = filter((val) => {
    return val === null;
});

let result = filterNulls(data);

// result is {foo: 1, baz: 3}
// golly!
```

*Use it in one line!*

```js
var data = [1,3,3,2,1];

let result = unique()(data);

// result is [1,3,2]
// yee!
```

## Inspiration

Immutable.js has a wonderfully symmetrical and well thought out API, and it deals with data [immutably](https://facebook.github.io/immutable-js/#the-case-for-immutability).
Its a fantastic library, but its drawbacks are that it's large in size and impossible to take only the parts of the API you want, which makes it quite unsuitable for small Javascript libraries. It also requires you use its special data types which can involve a lot of to-ing and fro-ing between normal Javascript types and Immutable.js types.

Ramdajs and Lodash/fp both allow for functions to be composed together *[point-free style](https://en.wikipedia.org/wiki/Tacit_programming)*, which is a really nice way of programming, and it naturally keeps the bundle size small as you only import what you need.
Lodash/fp's main drawback is that its API is large, unwieldy and unpredictable. Ramdajs' API is better planned, but it's overall pretty esoteric and alien to programmers who are not used to fully functional languages.
And both of those libraries use [currying](https://hughfdjackson.com/javascript/why-curry-helps/), which unmutable deliberately avoids*.

<small>Unmutable deliberately avoids currying because currying in Javascript requires functions to have fixed arity, and Unmutable cannot have fixed arity functions because it must match Immutable.js which uses optional arguments / variable arity functions.</small>
