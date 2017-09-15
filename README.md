# unmutable

*Immutable.js functions for collections that may or may not be Immutable.*

Immutable.js has a fantastic API, but sometimes you don't want to turn everything into Immutable collections. You may need to cope with data that might sometimes contain immutable collections and sometimes not. This project aims to bring that API over for use with plain objects and arrays as well as Immutable.js `Map` and `List` collections.

### Quick example

`Wrap` will wrap your data in an `UnmutableWrapper`. You can then use Immutable.js style methods on it, then call `done()` when you want to get the contents of your wrapper back out again.

```
import {Wrap} from 'unmutable';

var wrappedObject = Wrap({
    a: {
        b: "hi"
    }
})

console.log(wrappedObject.getIn(['a', 'b']).done()); // logs out "hi"

```

## Installation

There are two packages you can choose from, `unmutable` or `unmutable-lite`.

### unmutable

Unmutable requires `immutable@v3.8.1` as a peer depencency, and will allow you to use almost all of Immutable.js' methods on your Unmutable collections. Use this if you already have Immutable.js as a dependency or want to take advantage of Immutable.js' large set of `Map` and `List` features.

Refer to the [Methods](#Methods) section to see which methods you can use on Unmutable collections.


```
yarn add immutable
yarn add unmutable
```

or 

```
npm install immutable
npm install unmutable
```

### unmutable-lite

Unmutable-lite is a standalone library that allows you to use a subset of Immutable.js' methods on objects and arrays, and on Immutable.js collections. Use this if you like using Immutable.js' simpler methods but don't want the Immutable.js dependency.

Refer to the [Methods](#Methods) section to see which methods you can use on Unmutable-lite collections.

```
yarn add unmutable-lite
```

or 

```
npm install unmutable-lite
```

## More examples

Data types are preserved through the wrapping process. Pass in an object and you'll get back an object. Pass in a `Map`? A `Map` is what you'll get back. Same goes for Arrays vs `Lists`.

```
import {Wrap} from 'unmutable';
import {Map} from 'immutable';

var obj = {abc: 123};
var newObj = Wrap(obj).set('abc', 456).done();
// newObj is an object {abc: 456}

var map = Map({abc: 123});
var newMap = Wrap(map).set('abc', 456).done();
// newMap is a Map {abc: 456}

```

`Wrap` can actually wrap around any data type, not just collections. If your data isn't a collection then you won't be able to use any collection manipulation methods, but you will be able to call the wrapper's `isCollection()`, `isKeyed()` and `isIndexed()` on any wrapped data.

Please note that while you *can* wrap Immutable collections other than `Map` and `List`, right now they won't be recognised as collections so you won't be able to access their methods on the Unmutable wrapper. As this library grows, the plan is to bring in more Immutable types.

```
import {Wrap} from 'unmutable';

console.log(Wrap("string").done()); // logs out "string"
console.log(Wrap("string").isCollection()); // false
```

## Methods

So far, these are the methods on `Map`s and `List`s have been implemented for objects and arrays, in `unmutable` and `unmutable-lite` respectively. New ones will be added over time.

| `unmutable` Object / Map | `unmutable` Array / List | `unmutable-list` Object / Map | `unmutable-list` Array / List |
| --- | --- | --- | --- |
| asImmutable | asImmutable | asImmutable | asImmutable |
| asMutable | asMutable | asMutable | asMutable |
| **butLast** ✔︎ | **butLast** ✔︎ | butLast | butLast |
| **clear** ✔︎ | **clear** ✔︎ | **clear** ✔︎ | **clear** ✔︎ |
| **concat** ✔︎ | **concat** ✔︎ | **concat** ✔︎ | **concat** ✔︎ |
| **count** ✔︎ | **count** ✔︎ | **count** ✔︎ | **count** ✔︎ |
| countBy | countBy | countBy | countBy |
| **delete** ✔︎ | **delete** ✔︎ | **delete** ✔︎ | **delete** ✔︎ |
| **deleteIn** ✔︎ | **deleteIn** ✔︎ | **deleteIn** ✔︎ | **deleteIn** ✔︎ |
| entries | entries | entries | entries |
| entrySeq | entrySeq | entrySeq | entrySeq |
| equals | equals | equals | equals |
| **every** ✔︎ | **every** ✔︎ | every | every |
| **filter** ✔︎ | **filter** ✔︎ | filter | filter |
| **filterNot** ✔︎ | **filterNot** ✔︎ | filterNot | filterNot |
| find | find | find | find |
| findEntry | findEntry | findEntry | findEntry |
| - | findIndex | - | findIndex |
| findKey | findKey | findKey | findKey |
| findLast | findLast | findLast | findLast |
| findLastEntry | findLastEntry | findLastEntry | findLastEntry |
| findLastIndex | findLastIndex | findLastIndex | findLastIndex |
| findLastKey | findLastKey | findLastKey | findLastKey |
| **first** ✔︎ | **first** ✔︎ | first | **first** ✔︎ |
| flatMap | flatMap | flatMap | flatMap |
| flatten | flatten | flatten | flatten |
| flip | | flip | |
| forEach | forEach | forEach | forEach |
|  - | fromEntrySeq | - | fromEntrySeq |
| **get** ✔︎ | **get** ✔︎ | **get** ✔︎ | **get** ✔︎ |
| **getIn** ✔︎ | **getIn** ✔︎ | **getIn** ✔︎ | **getIn** ✔︎ |
| groupBy | groupBy | groupBy | groupBy |
| **has** ✔︎ | **has** ✔︎ | **has** ✔︎ | **has** ✔︎ |
| hashCode | hashCode | hashCode | hashCode |
| **hasIn** ✔︎ | **hasIn** ✔︎ | **hasIn** ✔︎ | **hasIn** ✔︎ |
| **includes** ✔︎ | **includes** ✔︎ | **includes** ✔︎ | **includes** ✔︎ |
| - | indexOf | - | indexOf |
| - | **insert** ✔︎ | - | insert |
| - | **interleave** ✔︎ | - | interleave |
| - | **interpose** ✔︎ | - | interpose |
| **isEmpty** ✔︎ | **isEmpty** ✔︎ | **isEmpty** ✔︎ | **isEmpty** ✔︎ |
| isSubset | isSubset | isSubset | isSubset |
| isSuperset | isSuperset | isSuperset | isSuperset |
| join | join | join | join |
| keyOf | keyOf | keyOf | keyOf |
| keys | keys | keys | keys |
| keySeq | keySeq | keySeq | keySeq |
| **last** ✔︎ | **last** ✔︎ | last | **last** ✔︎ |
| | lastIndexOf | | lastIndexOf |
| lastKeyOf | lastKeyOf | lastKeyOf | lastKeyOf |
| **map** ✔︎ | **map** ✔︎ | map | map |
| **mapEntries** ✔︎ | - | mapEntries | - |
| max | max | max | max |
| maxBy | maxBy | maxBy | maxBy |
| **merge** ✔︎ | **merge** ✔︎ | merge | merge |
| mergeDeep | mergeDeep | mergeDeep | mergeDeep |
| mergeDeepIn | mergeDeepIn | mergeDeepIn | mergeDeepIn |
| mergeDeepWith | mergeDeepWith | mergeDeepWith | mergeDeepWith |
| mergeIn | mergeIn | mergeIn | mergeIn |
| **mergeWith** ✔︎ | **mergeWith** ✔︎ | mergeWith | mergeWith |
| min | min | min | min |
| minBy | minBy | minBy | minBy |
| - | **pop** ✔︎ | - | **pop** ✔︎ |
| - | **push** ✔︎ | - | **push** ✔︎ |
| reduce | reduce | reduce | reduce |
| reduceRight | reduceRight | reduceRight | reduceRight |
| **rest** ✔︎ | **rest** ✔︎ | rest | rest |
| **reverse** ✔︎ | **reverse** ✔︎ | reverse | reverse |
| **set** ✔︎ | **set** ✔︎ | **set** ✔︎ | **set** ✔︎ |
| **setIn** ✔︎ | **setIn** ✔︎ | **setIn** ✔︎ | **setIn** ✔︎ |
| - | setSize | - | setSize |
| - | **shift** ✔︎ | - | **shift** ✔︎ |
| **skip** ✔︎ | **skip** ✔︎ | skip | skip |
| **skipLast** ✔︎ | **skipLast** ✔︎ | skipLast | skipLast |
| **skipUntil** ✔︎ | **skipUntil** ✔︎ | skipUntil | skipUntil |
| **skipWhile** ✔︎ | **skipWhile** ✔︎ | skipWhile | skipWhile |
| **slice** ✔︎ | **slice** ✔︎ | **slice** ✔︎ | **slice** ✔︎ |
| **some** ✔︎ | **some** ✔︎ | some | some |
| **sort** ✔︎ | **sort** ✔︎ | sort | sort |
| **sortBy** ✔︎ | **sortBy** ✔︎ | sortBy | sortBy |
| - | splice | - | splice |
| take | take | take | take |
| takeLast | takeLast | takeLast | takeLast |
| takeUntil | takeUntil | takeUntil | takeUntil |
| takeWhile | takeWhile | takeWhile | takeWhile |
| toArray | toArray | toArray | toArray |
| toIndexedSeq | toIndexedSeq | toIndexedSeq | toIndexedSeq |
| toJS | toJS | toJS | toJS |
| toJSON | toJSON | toJSON | toJSON |
| toKeyedSeq | toKeyedSeq | toKeyedSeq | toKeyedSeq |
| toList | toList | toList | toList |
| toMap | toMap | toMap | toMap |
| toObject | toObject | toObject | toObject |
| toOrderedMap | toOrderedMap | toOrderedMap | toOrderedMap |
| toOrderedSet | toOrderedSet | toOrderedSet | toOrderedSet |
| toSeq | toSeq | toSeq | toSeq |
| toSet | toSet | toSet | toSet |
| toSetSeq | toSetSeq | toSetSeq | toSetSeq |
| toStack | toStack | toStack | toStack |
| - | **unshift** ✔︎ | - | **unshift** ✔︎ |
| **update** ✔︎ | **update** ✔︎ | **update** ✔︎ | **update** ✔︎ |
| **updateIn** ✔︎ | **updateIn** ✔︎ | **updateIn** ✔︎ | **updateIn** ✔︎ |
| values | values | values | values |
| valueSeq | valueSeq | valueSeq | valueSeq |
| withMutations | withMutations | withMutations | withMutations |
| - | zip | - | zip |
| - | zipWith | - | zipWith |

