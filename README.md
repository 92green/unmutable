# unmutable

*Pure functional, point-free data-collection utilities that work seamlessly with both plain Javascript and Immutable.js*

- [![unmutable npm](https://img.shields.io/npm/v/unmutable.svg?style=flat-square)](https://www.npmjs.com/package/unmutable)
- [![unmutable circle](https://img.shields.io/circleci/project/github/blueflag/unmutable.svg?style=flat-square)]()

```
yarn add unmutable
```

[Immutable.js](https://facebook.github.io/immutable-js/docs/) is good because:
- Wonderful API.
- Immutable data.
- Exotic data types.
- Functional-programming-flavoured usage.

Immutable.js can be bad **for libraries** because:
- It's big, and you can't cherry pick. Disappointment.*
- It's not transparent when dealing with Immutable.js and non-Immutable.js objects.*
- Having its own set of data containers makes sense for Immutable.js, but it brings its own set of consequences.*
- *See the *Sell! Sell! Sell!* section for deeper reasoning.

So **Unmutable.js** follows Immutable.js lovely API as closely as it can. But instead of chaining methods, you compose functions together. This leads to smaller bundle sizes, as you only import the functions you need. And it can also work with plain Javascript objects and arrays.

Each Unmutable.js function returns a function that accepts the value to operate on. So instead of this:

```js
let myData = fromJS({hello: "hi!"});
myData.get('hello', 'notFoundValue'); // hi!
```

You could call it like this:

```js
get('hello', 'notFoundValue')(myData); // hi!
```

Then if you want to call more functions in a chain like this...

```js
import {fromJS} from 'immutable';

let data = [
    {name: "Bob"},
    {name: "Jenny"},
    {name: "Gordon"}
];

let name = fromJS(data)
    .last()
    .get('name'); // Gordon
```

...you can use Unmutable.js `pipe()` function to squish your functions together, like this:

```js
import get from 'unmutable/lib/pa/get';
import last from 'unmutable/lib/pa/last';
import pipe from 'unmutable/lib/util/pipe';

// point-free style - you dont pass your data in until the very end by calling the returned function.
// this function works with plain javascript or Immutable.js! Wonder!

let getLastName = pipe(
    last(),
    get('name')
);
let name = getLastName(data); // Gordon

// or, use pipeWith() and pass your data as the first argument

import pipe from 'unmutable/lib/util/pipeWith';

let name = pipeWith(
    data,
    last(),
    get('name')
); // Gordon

```

**Delicacy!**

## API

We're adding lots of functions in. We'll add them in as we go. If any added functions match names of Immutable.js Map or List methods, they will match Immutable.js' function signatures and do the same things. On top of this, we reserve the right to add extra cool functions that we might find useful.

**Pleasing time!**

API docs will come soon, with examples. In the mean time you can assume that any functions in this library are feature complete compared with [Immutable.js docs](https://facebook.github.io/immutable-js/docs/), and fully tested for `Map`, `List`, object and arrays. There are also a few extra functions:

#### util/pipe
 `pipe(...functions): Evaluator` - Composes (combines) functions together from left to right. Returns an evaluator that returns the output of the operation.

#### util/pipeWith
 `pipeWith(item, ...functions): *` - Accepts an item as the first argument, and composes (combines) functions in the remaining arguments together from left to right. Returns the output of the operation.
 
#### util/compose
 `compose(...functions): Evaluator` - Composes (combines) functions together from right to left. Returns an evaluator that returns the output of the operation.
 
#### util/overload
 `overload({...overloads}, overloadArgs: * = undefined): Function` - Simulates function overloading in Javascript.

#### util/isCollection
 `isCollection(maybe: *): boolean` - Works like Immutable.js `isCollection` but also works on plain Javascript arrays and objects.

#### util/isValueObject
 `isValueObject(maybe: *): boolean` - Works like Immutable.js `isValueObject` but also works on plain Javascript arrays and objects.

#### pa/keyArray
`keyArray(): Evaluator` - Returns an evaluator that returns an array of keys on the item. Immutable.js has no function that does this, they have `keys()` which returns an iterator, and `keySeq()` which returns an Immutable.js `Seq`.

#### pa/pick
`pick(keys: string[]): Evaluator` - For `Map` and object: Returns an evaluator that filters out all keys that aren't listed in `keys`.

#### pa/pivot
`pivot(): Evaluator` - Returns an evaluator that pivots the item. The keys at the first level of nesting are moved to the second level, and the keys of the second level are moved to the first.

#### pa/omit
`omit(keys: string[]): Evaluator` - For `Map` and object: Returns an evaluator that filters out all keys listed in `keys`.

#### pa/omit
`size(): Evaluator` - Returns the number of keys on the item. Immutable.js has this as a getter on their collections, Unmutable.js offers this as a function.

## Sell! Sell! Sell!

Immutable.js is good because:
- Wonderful API.
- Immutable data.
- Exotic data types.
- Functional-programming-flavoured usage.

Immutable.js can be bad **for libraries** because:
- It's big, and you can't cherry pick. Disappointment.
  - If you import `List` for example, you import every method that `List` has on it, even if you only use one of them.
- It's not transparent when dealing with Immutable.js and non-Immutable.js objects.
  - It's difficult to write functions that use Immutable.js that return the same data types as they accept. Functions you write will tend to either always return Immutable.js typed, or plain types.
- Having its own set of data containers makes sense for Immutable.js, but it brings its own set of consequences.
  - Wrapping and unwrapping data can be tedious and lead to confusion about whether you expect to see Immutable.js objects or plain Javascript at different points in the code.
  - Special data containers make it harder to work alongside functions that only work with Immutable.js, or to remove Immutable from the codebase if the reason arises.
  - Wrapping and unwrapping take time and can sometimes be quite slow, particularly if you use `fromJS()` to try and avoid the uncertainly of mixing plain javascript and Immutable.js types.

## Introduce unmutable!

Unmutable.js is good because:
- Wonderful API, because it aims to match Immutable.js API for Maps and Lists as closely as possible.
- Immutable data.
- You can pick your cherries. Only import the functions you need. Lightweight!
- It *is* transparent when dealing with Immutable.js and non-Immutable.js objects.
  - Pass in plain objects and arrays and you will receive plain objects and arrays back out. Even data that is a mix of plain collections and Immutable.js collections will be preserved, and deep operations like `getIn()` will traverse Immutable.js and non-Immutable.js objects with no issue.
- Functional-programming-flavoured usage.
  - Bonus point-free style programming! **Very fine!**
- Designed to work very well alongside Immutable.js.

Unmutable.js is bad because:
- No exotic data types. Disappointment. You can still use Immutable.js if you want nice things like Seqs and Records.

## More examples

Point free style can become quite fun in methods that accept iteratee functions. Consider this Immutable.js thing:

```js
import {fromJS} from 'immutable';

let data = [
    {nums: null},
    {nums: [1,2,3]},
    {nums: [4,5,6]},
    {nums: [7,8,9]},
    {nums: null},
    {nums: null}
];

let someStuff = fromJS(data)
    .filter(ii => ii.get('nums')) // remove missing nums
    .map(ii => ii
        .get('nums')
        .map(num => num * 10) // multiply all the nums by 10
    )
    .push(fromJS([100,110,120])) // add more nums
    .toJS();

/*
Returns this:
[
    [10,20,30],
    [40,50,60],
    [70,80,90],
    [100,110,120]
]
*/

```

That can be written in Unmutable.js as this:

```js
let someStuff = pipe(
    filter(get('nums')),
    map(pipe(
        get('nums'),
        map(ii => ii * 10)
    )),
    push([100,110,120])
)(data);

```

Notice how the function returned from the first `get()` ends up receiving the values provided by `filter()`, and the function returned from the inner `pipe()` ends up receiving the values provided by `map()`.

**Extravagant!**

Sometimes you'll still want the second and third arguments from an interatee, and you can still do this if you like.

```js
map(pipe(
    get('nums'),
    map(ii => ii * 10)
))
```

Becomes:

```js
map((value, key) => {
    console.log("the key to life and all things:", key);
    return pipe(
        get('nums'),
        map(ii => ii * 10)
    )(value);
})
```

## Development

