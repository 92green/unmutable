# unmutable

*Pure functional, point-free data-collection utilities that work with seamlessly both plain Javascript and Immutable.js*

```
yarn add unmutable
```

Immutable.js is good because:
- Wonderful API.
- Immutable data.
- Exotic data types.
- Functional-programming-flavoured usage.

Immutable.js can be bad **for libraries** because:
- It's big, and you can't cherry pick. Disappointment.
- It's not transparent when dealing with Immutable.js and non-Immutable.js objects.*
- Having its own set of data containers makes sense for Immutable.js, but it brings its own set of consequences.*
- *See the *Sell! Sell! Sell!* section for deeper reasoning.

So **Unmutable.js** follows Immutable.js lovely API as closely as it can. But instead of chaining methods, you compose functions together. This leads to smaller bundle sizes, as you only import the functions you need. And it can also work with plain Javascript objects and arrays.

Each Unmutable.js function returns a function that accepts the value to operate on.

So instead of this:

```
let myData = fromJS({hello: "hi!"});
myData.get('hello', 'notFoundValue'); // hi!
```

You could call it like this:

```
get('hello', 'notFoundValue')(myData); // hi!
```

Then if you want to call more functions in a row like this...

```
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

```
import get from 'unmutable/pa/get';
import last from 'unmutable/pa/last';
import pipe from 'unmutable/pa/pipe';

// point-free style - you dont pass your data in until the very end by calling the returned function.

let getLastName = pipe(
    last(),
    get('name')
);

// this function works with plain javascript or Immutable.js! Wonder!

let name = getLastName(data); // Gordon

```

**Delicacy!**

## API

We're adding lots of functions in. We'll add them in as we go. If any added functions match names of Immutable.js Map or List methods, they will match Immutable.js' function signatures and do the same things. On top of this, we reserve the right to add extra cool functions that we might find useful.

**Pleasing time!**

## Sell! Sell! Sell!

Immutable.js is good because:
- Wonderful API.
- Immutable data.
- Exotic data types.
- Functional-programming-flavoured usage.

Immutable.js can be bad **for libraries** because:
- It's big, and you can't cherry pick. Disappointment.
- It's not transparent when dealing with Immutable.js and non-Immutable.js objects.
  - It's difficult to write functions that use Immutable.js that return the same data types as they accept. Functions you write will tend to either always return Immutable.js typed, or plain types.
- Having its own set of data containers makes sense for Immutable.js, but it brings its own set of consequences.
  - Wrapping and unwrapping data can be tedious and lead to confusion about whether you expect to see Immutable.js objects or plain Javascript at different points in the code.
  - Special data containers make it harder to work alongside functions that only work with Immutable.js, or to remove Immutable from the codebase if the reason arises.
  - Wrapping and unwrapping take time and can sometimes be quite slow, particularly if you use `fromJS()` to try and avoid the uncertainly of mixing plain javascript and Immutbale.js types.

## Introduce unmutable!

Unmutable.js is good because:
- Wonderful API, because it aims to match Immutable.js API for Maps and Lists as closely as possible.
- Immutable data.
- You can pick your cherries. Only import the functions you need. Lightweight!
- It *is* transparent when dealing with Immutable.js and non-Immutable.js objects.
  - Pass in plain objects and arrays and you will receive plain objects and arrays back out. Even data that is a mix of plain collections and Immutable.js collections work.
- Functional-programming-flavoured usage.
  - Bonus point-free style programming! **Very fine!**
- Desiogned to work very well alongside Immutable.js.

Unmutable.js is bad because:
- No exotic data types. Disappointment. You can still use Immutable.js if you want nice things like Seqs and Records.

## More examples

Point free style can become quite fun in methods that accept iteratee functions. Consider this Immutable.js thing:

```
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

```
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

```
map(pipe(
    get('nums'),
    map(ii => ii * 10)
))
```

Becomes:

```
map((value, key) => {
    console.log("the key to life and all things:", key);
    return pipe(
        get('nums'),
        map(ii => ii * 10)
    )(value);
})
```

