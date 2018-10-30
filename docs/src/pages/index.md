## What is it?

It's the best parts of [immutable.js](https://facebook.github.io/immutable-js/) and [ramdajs](https://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) combined together.

## What do you mean?

Immutable.js has a wonderfully symmetrical and well thought out API, and it deals with data [immutably](https://facebook.github.io/immutable-js/#the-case-for-immutability).
Its a great library, but its drawbacks are that it's large in size and impossible to take only the parts of the API you want, and that it requires you use its special data types.

Ramdajs and Lodash/fp allows for functions to be composed together *[point-free style](https://en.wikipedia.org/wiki/Tacit_programming)*, which is a really nice pattern to use, and naturally keeps the bundle size small as you only import what you need.
Lodash/fp's main drawback is that its API is large, unwieldy and unpredictable. Ramdajs' API is better planned, but it's overall pretty esoteric and alien to programmers who are not used to fully functional languages.
Both libraries use [currying](https://hughfdjackson.com/javascript/why-curry-helps/), which [unmutable deliberately avoids](#).
