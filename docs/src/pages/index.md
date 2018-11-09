import Link from '../component/Link';

## What is it?

Unmutable is a data collection library that combines my favourite parts of [immutable.js](https://facebook.github.io/immutable-js/), [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [ramdajs](https://ramdajs.com/) together.

Unmutable follows [immutable.js](https://facebook.github.io/immutable-js/)'s API almost exactly, and but exports each method individually as a [point-free function](https://en.wikipedia.org/wiki/Tacit_programming), in the same way as [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) does. These functions are all immutable, and can be composed together easily.

Unmutable also works seamlessly on plain Javascript objects and arrays, Immutable.js Maps, Lists and Records. It can also works on your own classes if you make them [unmutable-compatible](#).

## Example

For now, Unmutable is for use with objects and arrays, Immutable.js `Map`s, `List`s, and `Record`s, and [unmutable-compatible](#) classes.

Each Unmutable function returns a function that accepts the value to operate on:


```js
import getIn from 'unmutable/lib/getIn';

let data = {
    cat: {
       name: "Gordon!"
    }
};

getIn(['cat', 'name'])(data); // Gordon!
```

Or if you prefer to pass your data in first, use Unmutable' `pipeWith` function:

```js
import getIn from 'unmutable/lib/getIn';
import pipeWith from 'unmutable/lib/pipeWith';

pipeWith(
    data,
    getIn(['cat', 'name'])
); // Gordon!
```

Then if you want to call more functions in a chain you can use Unmutable' `pipe` function, which can be used to squish a set of functions together, like this:

```js
import get from 'unmutable/lib/get';
import last from 'unmutable/lib/last';
import pipe from 'unmutable/lib/pipe';

let data = [
    {name: "Bob"},
    {name: "Jenny"},
    {name: "Herbert!"}
];

let getLastName = pipe(
    last(),
    get('name')
);

let name = getLastName(data); // Herbert!

// you dont pass your data in until the very end by calling the returned function.
// this is known as point-free programming, and allows for very composable functions.

```

Or if you prefer to pass your data in first, use Unmutable' `pipeWith` function:

```js
import pipeWith from 'unmutable/lib/pipeWith';

let name = pipeWith(
    data,
    last(),
    get('name')
); // Herbert!
```

<Link to="/api">Unmutable's API</Link> follows [Immutable.js' lovely API for Maps and Lists](https://facebook.github.io/immutable-js/docs/) as closely as it can, while adding more useful functions that lodash users might be used to, such as `pick`.

## Inspiration

Immutable.js has a wonderfully symmetrical and well thought out API, and it deals with data [immutably](https://facebook.github.io/immutable-js/#the-case-for-immutability).
Its a fantastic library, but its drawbacks are that it's large in size and impossible to take only the parts of the API you want, which makes it quite unsuitable for small Javascript libraries. It also requires you use its special data types which can involve a lot of to-ing and fro-ing between normal Javascript types and Immutable.js types.

Ramdajs and Lodash/fp both allow for functions to be composed together *[point-free style](https://en.wikipedia.org/wiki/Tacit_programming)*, which is a really nice way of programming, and it naturally keeps the bundle size small as you only import what you need.
Lodash/fp's main drawback is that its API is large, unwieldy and unpredictable. Ramdajs' API is better planned, but it's overall pretty esoteric and alien to programmers who are not used to fully functional languages.
And both of those libraries use [currying](https://hughfdjackson.com/javascript/why-curry-helps/), which [unmutable deliberately avoids](#).

## Getting Started

Do this:

```
yarn add unmutable
```

## API

**<Link to="/api">See the full API here</Link>**
