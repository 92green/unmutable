# unmutable

*Pure functional, point-free data-collection utilities that work seamlessly with both plain Javascript and Immutable.js*

[![unmutable npm](https://img.shields.io/npm/v/unmutable.svg?style=flat-square)](https://www.npmjs.com/package/unmutable) [![unmutable circle](https://img.shields.io/circleci/project/github/blueflag/unmutable.svg?style=flat-square)]()

```
yarn add unmutable
```

## Docs

[**See the Unmutable Docs**](DOCS.md)

## About unmutable

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

So **Unmutable.js** follows Immutable.js lovely API as closely as it can. But instead of chaining methods, you compose functions together. This leads to smaller bundle sizes, as you only import the functions you need. And all Unmutable.js functions can work seamlessly with plain javascript or Immutable.js versions 3 and 4! Wonder!

For now, Unmutable.js is focused only on `Map`s, `List`s, objects and arrays. Support for `Record`s is currently being added experimentally.

Each Unmutable.js function returns a function that accepts the value to operate on. So instead of this:

```js
let myData = fromJS({hello: "hi!"});
myData.get('hello', 'notFoundValue'); // hi!
```

You could call it like this:

```js
import get from 'unmutable/lib/get';
get('hello', 'notFoundValue')(myData); // hi!
```

Or if you prefer to pass your data in first, use Unmutable.js' `pipeWith` function:

```js
import get from 'unmutable/lib/get';
import pipeWith from 'unmutable/lib/util/pipeWith';

pipeWith(myData, get('hello', 'notFoundValue')); // hi!
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

...you can use Unmutable.js' `pipe` function, which can be used to squish a set of functions together, like this:

```js
import get from 'unmutable/lib/get';
import last from 'unmutable/lib/last';
import pipe from 'unmutable/lib/util/pipe';

let getLastName = pipe(
    last(),
    get('name')
);

let name = getLastName(data); // Gordon

// you dont pass your data in until the very end by calling the returned function.
// this is known as point-free programming, and allows for very composable functions.

```

Or if you prefer to pass your data in first, use Unmutable.js' `pipeWith` function:

```js
import pipeWith from 'unmutable/lib/util/pipeWith';

let name = pipeWith(
    data,
    last(),
    get('name')
); // Gordon
```

**Delicacy!**


We're adding lots of functions in. We'll add them in as we go. If any added functions match names of Immutable.js Map or List methods, they will match Immutable.js' function signatures and do the same things. On top of this, we reserve the right to add extra cool functions that we might find useful.

[**See the Unmutable Docs**](DOCS.md)

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
  - It's difficult to write functions that use Immutable.js that return the same data types as they start with. Functions you write will tend to either always return Immutable.js typed, or plain types.
- Having its own set of data containers makes sense for Immutable.js, but it brings its own set of consequences.
  - Wrapping and unwrapping data can be tedious and lead to confusion about whether you expect to see Immutable.js objects or plain Javascript at different points in the code.
  - Special data containers make it harder to work alongside functions that only work with Immutable.js, and make it harder to remove Immutable from the codebase if the reason arises.
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
- No exotic data types, just Maps, Lists, arrays and objects for now. Disappointment. You can still use Immutable.js if you want nice things like Seqs and Records.
- Performance has not been tested in comparison to Immutable.js yet. It's likely that Immutable.js is more efficient in many cases, so consider that if you're working with large data sets or intense computation of collections. Keep in mind that using Unmutable.js doesn't have the overhead of `fromJS()` and `toJS()`ing all your data. Unmutable.js *does* have the extra overhead of having to identify the data type whenever a function is called, which may be noticeable until we do [this](https://github.com/blueflag/unmutable/issues/35).

**Pleasing time!**

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

Sometimes you'll still want the second and third arguments from an iteratee, and you can still do this if you like. In this example we want to get the `key` that `map()` provides, but we can't get access to it if we put `pipe()` straight into `map()`:

```js
let data = {
    groupA: {names: ["Alice", "Bob", "Chris"]},
    groupB: {names: ["Doug", "Ed", "Futz"]}
};

let printGroup = map(pipe(
    get('names'),
    join(', ')
    update(str => `which group?: ${str}`)
));

let answer = printGroup(data);
// Answer = ["which group?: Alice, Bob, Chris", "which group?: Doug, Ed, Futz"];
```

To fix this, we can put the `pipe()` in another function, which can receive `key`:

```js
let printGroup = map((value, key) => pipe(
    get('names'),
    join(', ')
    update(str => `${key}: ${str}`)
)(value));

let answer = printGroup(data);
// Answer = ["groupA: Alice, Bob, Chris", "groupB: Doug, Ed, Futz"];
```

Now that your mapper function makes a pipe and immediately calls it with a value, you might find it more readable to pass your value in first using `pipeWith`:

```js
let printGroup = map((value, key) => pipeWith(
    value,
    get('names'),
    join(', ')
    update(str => `${key}: ${str}`)
));

let answer = printGroup(data);
// Answer = ["groupA: Alice, Bob, Chris", "groupB: Doug, Ed, Futz"];
```

## Development

If you are to add functions that already exist in Immutable.js, make sure they are fully complete before submitting, and work with all data types that the original function works with, plus their corresponding Javascript equivalents (e.g. `List` -> array). Test utils like `compare` and `compareIteratee` will let you easily test the plain Javascript portion of your functions against the behaviour of Immutable.js' functions.

*Caution: Do not use `compare` or `compareIteratee` if the function you are writing does not use the Immutable.js version of the function internally. Doing so may give you passing tests that don't prove that your code works. See `hasIn` for an example.*

If you want to add functions that don't exist in Immutable.js, roll your chair over and talk about it first. Yes I'm assuming you work in the same room as me, you probably do. If you don't, feel free to pop your idea in an issue and we can talk about it. Functions that aren't in Immutable.js should be built out of other Unmutable.js functions as much as possible and/or make use of iterators (`entries()`, `entriesReverse()`, `keys()`, `values()`), to keep the amount of data-container-specific code to a minimum. See `pivot` as an example.

Remember to update the [docs page](DOCS.md) if necessary as part of your PR.
