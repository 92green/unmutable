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
| - [ ] asImmutable | - [ ] asImmutable | - [ ] asImmutable | - [ ] asImmutable |
| - [ ] asMutable | - [ ] asMutable | - [ ] asMutable | - [ ] asMutable |
| - [x] **butLast** | - [x] **butLast** | - [ ] butLast | - [ ] butLast |
| - [x] **clear** | - [x] **clear** | - [x] **clear** | - [x] **clear** |
| - [x] **concat** | - [x] **concat** | - [x] **concat** | - [x] **concat** |
| - [x] **count** | - [x] **count** | - [x] **count** | - [x] **count** |
| - [ ] countBy | - [ ] countBy | - [ ] countBy | - [ ] countBy |
| - [x] **delete** | - [x] **delete** | - [x] **delete** | - [x] **delete** |
| - [x] **deleteIn** | - [x] **deleteIn** | - [x] **deleteIn** | - [x] **deleteIn** |
| - [ ] entries | - [ ] entries | - [ ] entries | - [ ] entries |
| - [ ] entrySeq | - [ ] entrySeq | - [ ] entrySeq | - [ ] entrySeq |
| - [ ] equals | - [ ] equals | - [ ] equals | - [ ] equals |
| - [x] **every** | - [x] **every** | - [ ] every | - [ ] every |
| - [x] **filter** | - [x] **filter** | - [ ] filter | - [ ] filter |
| - [x] **filterNot** | - [x] **filterNot** | - [ ] filterNot | - [x] filterNot |
| - [ ] find | - [ ] find | - [ ] find | - [ ] find |
| - [ ] findEntry | - [ ] findEntry | - [ ] findEntry | - [ ] findEntry |
| | - [ ] findIndex | | - [ ] findIndex |
| - [ ] findKey | - [ ] findKey | - [ ] findKey | - [ ] findKey |
| - [ ] findLast | - [ ] findLast | - [ ] findLast | - [ ] findLast |
| - [ ] findLastEntry | - [ ] findLastEntry | - [ ] findLastEntry | - [ ] findLastEntry |
| - [ ] findLastIndex | - [ ] findLastIndex | - [ ] findLastIndex | - [ ] findLastIndex |
| - [ ] findLastKey | - [ ] findLastKey | - [ ] findLastKey | - [ ] findLastKey |
| - [x] **first** | - [x] **first** | - [ ] first | - [x] **first** |
| - [ ] flatMap | - [ ] flatMap | - [ ] flatMap | - [ ] flatMap |
| - [ ] flatten | - [ ] flatten | - [ ] flatten | - [ ] flatten |
| - [ ] flip | | - [ ] flip | |
| - [ ] forEach | - [ ] forEach | - [ ] forEach | - [ ] forEach |
|  | - [ ] fromEntrySeq |  | - [ ] fromEntrySeq |
| - [x] **get** | - [x] **get** | - [x] **get** | - [x] **get** |
| - [x] **getIn** | - [x] **getIn** | - [x] **getIn** | - [x] **getIn** |
| - [ ] groupBy | - [ ] groupBy | - [ ] groupBy | - [ ] groupBy |
| - [x] **has** | - [x] **has** | - [x] **has** | - [x] **has** |
| - [ ] hashCode | - [ ] hashCode | - [ ] hashCode | - [ ] hashCode |
| - [x] **hasIn** | - [x] **hasIn** | - [x] **hasIn** | - [x] **hasIn** |
| - [x] **includes** | - [x] **includes** | - [x] **includes** | - [x] **includes** |
| | - [ ] indexOf | | - [ ] indexOf |
| | - [x] **insert** | | - [ ] insert |
| | - [x] **interleave** | | - [ ] interleave |
| | - [x] **interpose** | | - [ ] interpose |
| - [x] **isEmpty** | - [x] **isEmpty** | - [x] **isEmpty** | - [x] **isEmpty** |
| - [ ] isSubset | - [ ] isSubset | - [ ] isSubset | - [ ] isSubset |
| - [ ] isSuperset | - [ ] isSuperset | - [ ] isSuperset | - [ ] isSuperset |
| - [ ] join | - [ ] join | - [ ] join | - [ ] join |
| - [ ] keyOf | - [ ] keyOf | - [ ] keyOf | - [ ] keyOf |
| - [ ] keys | - [ ] keys | - [ ] keys | - [ ] keys |
| - [ ] keySeq | - [ ] keySeq | - [ ] keySeq | - [ ] keySeq |
| - [x] **last** | - [x] **last** | - [ ] last | - [x] **last** |
| | - [ ] lastIndexOf | | - [ ] lastIndexOf |
| - [ ] lastKeyOf | - [ ] lastKeyOf | - [ ] lastKeyOf | - [ ] lastKeyOf |
| - [x] **map** | - [x] **map** | - [ ] map | - [ ] map |
| - [x] **mapEntries** | | - [ ] mapEntries | |
| - [ ] max | - [ ] max | - [ ] max | - [ ] max |
| - [ ] maxBy | - [ ] maxBy | - [ ] maxBy | - [ ] maxBy |
| - [x] **merge** | - [x] **merge** | - [ ] merge | - [] merge |
| - [ ] mergeDeep | - [ ] mergeDeep | - [ ] mergeDeep | - [ ] mergeDeep |
| - [ ] mergeDeepIn | - [ ] mergeDeepIn | - [ ] mergeDeepIn | - [ ] mergeDeepIn |
| - [ ] mergeDeepWith | - [ ] mergeDeepWith | - [ ] mergeDeepWith | - [ ] mergeDeepWith |
| - [ ] mergeIn | - [ ] mergeIn | - [ ] mergeIn | - [ ] mergeIn |
| - [x] **mergeWith** | - [x] **mergeWith** | - [ ] mergeWith | - [ ] mergeWith |
| - [ ] min | - [ ] min | - [ ] min | - [ ] min |
| - [ ] minBy | - [ ] minBy | - [ ] minBy | - [ ] minBy |
| | - [x] **pop** | | - [x] **pop** |
| | - [x] **push** | | - [x] **push** |
| - [ ] reduce | - [ ] reduce | - [ ] reduce | - [ ] reduce |
| - [ ] reduceRight | - [ ] reduceRight | - [ ] reduceRight | - [ ] reduceRight |
| - [x] **rest** | - [x] **rest** | - [ ] rest | - [ ] rest |
| - [x] **reverse** | - [x] **reverse** | - [ ] reverse | - [ ] reverse |
| - [x] **set** | - [x] **set** | - [x] **set** | - [x] **set** |
| - [x] **setIn** | - [x] **setIn** | - [x] **setIn** | - [x] **setIn** |
| | - [ ] setSize | | - [ ] setSize |
| | - [x] **shift** | | - [x] **shift** |
| - [x] **skip** | - [x] **skip** | - [ ] skip | - [ ] skip |
| - [x] **skipLast** | - [x] **skipLast** | - [ ] skipLast | - [ ] skipLast |
| - [x] **skipUntil** | - [x] **skipUntil** | - [ ] skipUntil | - [ ] skipUntil |
| - [x] **skipWhile** | - [x] **skipWhile** | - [ ] skipWhile | - [ ] skipWhile |
| - [x] **slice** | - [x] **slice** | - [x] **slice** | - [x] **slice** |
| - [x] **some** | - [x] **some** | - [ ] some | - [ ] some |
| - [x] **sort** | - [x] **sort** | - [ ] sort | - [ ] sort |
| - [x] **sortBy** | - [x] **sortBy** | - [ ] sortBy | - [ ] sortBy |
|  | - [ ] splice |  | - [ ] splice |
| - [ ] take | - [ ] take | - [ ] take | - [ ] take |
| - [ ] takeLast | - [ ] takeLast | - [ ] takeLast | - [ ] takeLast |
| - [ ] takeUntil | - [ ] takeUntil | - [ ] takeUntil | - [ ] takeUntil |
| - [ ] takeWhile | - [ ] takeWhile | - [ ] takeWhile | - [ ] takeWhile |
| - [ ] toArray | - [ ] toArray | - [ ] toArray | - [ ] toArray |
| - [ ] toIndexedSeq | - [ ] toIndexedSeq | - [ ] toIndexedSeq | - [ ] toIndexedSeq |
| - [ ] toJS | - [ ] toJS | - [ ] toJS | - [ ] toJS |
| - [ ] toJSON | - [ ] toJSON | - [ ] toJSON | - [ ] toJSON |
| - [ ] toKeyedSeq | - [ ] toKeyedSeq | - [ ] toKeyedSeq | - [ ] toKeyedSeq |
| - [ ] toList | - [ ] toList | - [ ] toList | - [ ] toList |
| - [ ] toMap | - [ ] toMap | - [ ] toMap | - [ ] toMap |
| - [ ] toObject | - [ ] toObject | - [ ] toObject | - [ ] toObject |
| - [ ] toOrderedMap | - [ ] toOrderedMap | - [ ] toOrderedMap | - [ ] toOrderedMap |
| - [ ] toOrderedSet | - [ ] toOrderedSet | - [ ] toOrderedSet | - [ ] toOrderedSet |
| - [ ] toSeq | - [ ] toSeq | - [ ] toSeq | - [ ] toSeq |
| - [ ] toSet | - [ ] toSet | - [ ] toSet | - [ ] toSet |
| - [ ] toSetSeq | - [ ] toSetSeq | - [ ] toSetSeq | - [ ] toSetSeq |
| - [ ] toStack | - [ ] toStack | - [ ] toStack | - [ ] toStack |
| | - [x] **unshift** | | - [x] **unshift** |
| - [x] **update** | - [x] **update** | - [x] **update** | - [x] **update** |
| - [x] **updateIn** | - [x] **updateIn** | - [x] **updateIn** | - [x] **updateIn** |
| - [ ] values | - [ ] values | - [ ] values | - [ ] values |
| - [ ] valueSeq | - [ ] valueSeq | - [ ] valueSeq | - [ ] valueSeq |
| - [ ] withMutations | - [ ] withMutations | - [ ] withMutations | - [ ] withMutations |
|  | - [ ] zip |  | - [ ] zip |
|  | - [ ] zipWith |  | - [ ] zipWith |

