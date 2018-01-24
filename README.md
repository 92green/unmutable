# unmutable

*Immutable.js functions for collections that may or may not be Immutable.*

Immutable.js is good because:
- Wonderful API.
- Immutable data.
- Exotic data types.
- Functional-programming-flavoured usage.

Immutable.js is bad for libraries because:
- It's big, and you can't cherry pick. Disappointment.
- It's not transparent when dealing with Immutable.js and non-Immutable.js objects.

## Introduce unmutable!

Unmutable.js is good because:
- Wonderful API (it matches Immutable.js API).
- Immutable data.
- You can pick your cherries. Only import the functions you need. Lightweight!
- It *is* transparent when dealing with Immutable.js and non-Immutable.js objects. Pass in plain objects and arrays and you will receive plain objects and arrays back out. Even data that is a mix of plain collections and Immutable.js collections works.
- Functional-programming-flavoured usage.
- Point-free style programming! **Very fine!**

Unmutable.js is bad because:
- No exotic data types. Disappointment.

## Installation

```
yarn add unmutable
```

## API

We're adding lots of functions in. We'll add them in as we go. If any added functions match names of Immutable.js Map or List methods, they will match Immutable.js' function signatures and do the same things. On top of this, we reserve the right to add extra cool functions that we might find useful.

**Pleasing time!**

## Usage examples

Unmutable follows Immutable.js API as closely as it can. But instead of chaining methods, you compose functions together. Each Unmutable.js function returns a function that accepts the value to operate on.

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

let data = [
    {name: "Bob"},
    {name: "Jenny"},
    {name: "Gordon"}
];

// point-free style - you dont pass your data in until the very end by calling the returned function.

let getLastName = pipe(
    last(),
    get('name')
);

// this function works with plain javascript or Immutable.js! Wonder!

let name = getLastName(data); // Gordon

```

**Delicacy!**

Point free style can become quite fun in methods that accept iteratee functions. Consider this Immutable.js thing:

```
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

Notice how the function returned from the first `get()` ends up receiving the value provided by `filter()`, and the function returned from the inner `pipe()` ends up receiving the value provided by `map()`.

**Extravagant!**
