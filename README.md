# unmutable

*Immutable.js functions for collections that may or may not be Immutable.*

Immutable.js has a fantastic API, but sometimes you don't want to turn everything into Immutable collections. You may need to cope with data that might sometimes contain immutable collections and sometimes not. This project aims to bring that API over for use with plain objects and arrays as well as Immutable collections.

Interally it uses Immutable.js to achieve this, so this project has a peer dependency of `immutable@v3.8.1`. If you want to go one step further and use a subset of Immutable's API with plain objects and arrays *without* the dependency on Immutable.js, then check back soon - there'll be a sister project that accomplishes just that.

## Installation

```
yarn add unmutable
```

or 

```
npm install unmutable
```

## Examples

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

Please note that while you *can* wrap Immutable collections other than `Map` and `List`, right now they won't be recognised as collections so you won't get their methods on the wrapper. As this library grows, the plan is to bring in more Immutable types.

```
import {Wrap} from 'unmutable';

console.log(Wrap("string").done()); // logs out "string"
console.log(Wrap("string").isCollection()); // false
```

## Methods

So far, these are the methods on `Map`s and `List`s have been implemented for objects and arrays. New ones will be added over time. Don't worry, they'll be quick.

### Map / Object methods

#### Done

- butLast
- clear
- concat
- count
- delete
- deleteIn
- every
- filter
- filterNot
- first
- get
- getIn
- has
- hasIn
- hasIn
- includes
- isEmpty
- last
- map
- mapEntries
- mapKeys
- merge
- mergeWith
- rest
- reverse
- set
- setIn
- skip
- skipLast
- skipUntil
- skipWhile
- slice
- some
- sort
- sortBy
- take
- takeLast
- takeUntil
- takeWhile
- update
- updateIn

#### Todo

- asImmutable
- asMutable
- countBy
- entries
- entrySeq
- equals
- find
- findEntry
- findKey
- findLast
- findLastEntry
- findLastKey
- flatMap
- flatten
- flip
- forEach
- groupBy
- hashCode
- isSubset
- isSuperset
- join
- keyOf
- keys
- keySeq
- lastKeyOf
- max
- maxBy
- mergeDeep
- mergeDeepIn
- mergeDeepWith
- mergeIn
- min
- minBy
- reduce
- reduceRight
- toArray
- toIndexedSeq
- toJS
- toJSON
- toKeyedSeq
- toList
- toMap
- toObject
- toOrderedMap
- toOrderedSet
- toSeq
- toSet
- toSetSeq
- toStack
- values
- valueSeq
- withMutations

### List / Array

#### Done

- butLast
- clear
- concat
- count
- delete
- deleteIn
- every
- filter
- filterNot
- first
- get
- getIn
- has
- hasIn
- includes
- insert
- interleave
- interpose
- isEmpty
- last
- map
- merge
- mergeWith
- pop
- push
- rest
- reverse
- set
- setIn
- shift
- skip
- skipLast
- skipUntil
- skipWhile
- slice
- some
- sort
- sortBy
- splice
- take
- takeLast
- takeUntil
- takeWhile
- unshift
- update
- updateIn

#### Todo
    
- asImmutable
- asMutable
- countBy
- entries
- entrySeq
- equals
- find
- findEntry
- findIndex
- findKey
- findLast
- findLastEntry
- findLastIndex
- findLastKey
- flatMap
- flatten
- forEach
- fromEntrySeq
- groupBy
- hashCode
- indexOf
- isSubset
- isSuperset
- join
- keyOf
- keys
- keySeq
- lastIndexOf
- lastKeyOf
- max
- maxBy
- mergeDeep
- mergeDeepIn
- mergeDeepWith
- mergeIn
- min
- minBy
- reduce
- reduceRight
- setSize
- toArray
- toIndexedSeq
- toJS
- toJSON
- toKeyedSeq
- toList
- toMap
- toObject
- toOrderedMap
- toOrderedSet
- toSeq
- toSet
- toSetSeq
- toStack
- values
- valueSeq
- withMutations
- zip
- zipWith
