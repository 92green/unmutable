# Unmutable Docs

Unmutable.js follows [Immutable.js](https://facebook.github.io/immutable-js/docs/)'s `Map` and `List` methods closely. For all Unmutable.js functions that have matching functions in Immutable.js, you can assume that they take the same arguments and do the same things.

Functions that normally work on `List`s will work on `List` and arrays, functions that normally work on `Map`s will work on `Map`s and objects.

It's a work in progress so not all functions have been implemented yet.

## Functions

All `pa` functions return an evaluator. An evaluator is a function that accepts a value and returns a result.

- * The asterisk indicates functions which only work with `List`s and arrays.
- ^ The carat indicates functions that are confirmed to work with `Record`s.

### Implemented

```
butLast
clear
concat
count
delete ^
deleteAll
deleteIn
entries ^
equals
every
filter ^
filterNot ^
find
findEntry
findIndex
findKey
findLast
findLastEntry
findLastIndex
findLastKey
first
get ^
getIn ^
has ^
hasIn ^
insert *
isEmpty ^
keyOf
keys ^
last
lastKeyOf
map ^
pop *
push *
reduce ^
reduceRight
rest
reverse
set ^
setIn ^
shift *
size
skip
skipLast
slice
some
take
takeLast
toArray
toJS
toObject
unshift *
update
updateIn
values ^
```

### To be implemented

```
countBy
flatMap
flatten
flip
forEach
groupBy
includes
indexOf *
interleave *
interpose *
isSubset
isSuperset
join
lastIndexOf *
mapKeys
mapEntries
max
maxBy
merge
mergeWith
mergeDeep
mergeDeepIn
mergeDeepWith
mergeIn
min
minBy
setSize *
skipWhile
skipUntil
splice *
sort
sortBy
takeWhile
takeUntil
toJSON
zip *
zipAll *
zipWith *
```

### Exceptions

The following functions will not be implemented in Unmutable.js

```
[Symbol.iterator]()
asMutable
asImmutable
entrySeq
fromEntrySeq
hashCode
keySeq
toList
toMap
toIndexedSeq
toKeyedSeq
toOrderedMap
toOrderedSet
toSet
toSeq
toSetSeq
toStack
valueSeq
wasAltered
withMutations
```



### Extra functions

#### pa/entriesReverse
`entriesReverse() => (value) => Iterator` - Returns an evaluator that works just like `entries()`, but iterates in the reverse order.

#### pa/entryArray
`entryArray() => (value) => Array` - Returns an evaluator that returns an array of entries (e.g. `[key, value]` tuples) of the item. Immutable.js has no function that does this, they have `entries()` which returns an iterator, and `entrySeq()` which returns an Immutable.js `Seq`.

#### pa/identity
`identity() => (value) => value` - Returns an evaluator that just passes values through with no change. Useful for readable code.

#### pa/keyArray
`keyArray() => (value) => Array` - Returns an evaluator that returns an array of keys on the item. Immutable.js has no function that does this, they have `keys()` which returns an iterator, and `keySeq()` which returns an Immutable.js `Seq`.

#### pa/log
`log(message: string = "", type: string = "log") => (value) => value` - Returns an evaluator that passes the value through unchanged, but also calls `console[type](message, value)`. Useful for debugging.

#### pa/omit
`omit(keys: string[]) => (value) => newValue` - For `Map` and object: Returns an evaluator that filters out all keys listed in `keys`.

#### pa/pick
`pick(keys: string[]) => (value) => newValue` - For `Map` and object: Returns an evaluator that filters out all keys that aren't listed in `keys`.

#### pa/pivot
`pivot() => (value) => newValue` - Returns an evaluator that pivots the item. The keys at the first level of nesting are moved to the second level, and the keys of the second level are moved to the first.

#### pa/size
`size() => (value) => number` - Returns an evaluator that number of keys on the item. Immutable.js has this as a getter on their collections, Unmutable.js offers this as a function.

#### pa/shallowEquals
`shallowEquals(other: *) => (value) => number` - Returns an evaluator that checks if `other` and `value` are shallowly equal, using strict equality. Note: use `equals()` if you want to check deep equality.

#### pa/shallowToJS
`shallowToJS() => (value) => *` - Returns an evaluator that turns the `value` into plain Javascript if it is an Immutable.js data type. Internally if `value` is a `List` then `.toArray()` is called, and if value is a `Map` then `toObject()` is called.

#### pa/strictEquals
`strictEquals(other: *) => (value) => number` - Returns an evaluator that checks if `other` and `value` are strictly equal. This complements `equals()`, which checks for deep value equality.

#### pa/valueArray
`valueArray() => (value) => Array` - Returns an evaluator that returns an array of values on the item. Immutable.js has no function that does this, they have `values()` which returns an iterator, and `valueSeq()` which returns an Immutable.js `Seq`.

### Extra functions to be implemented

```
toIndexed
toKeyed
unique
uniqueBy
```


## Util

Utils include functions that make Unmutable.js useable and useful, as well as plain-Javascript friendly versions of some of Immutable.js top level functions.

#### util/pipe
 `pipe(...functions) => (value) => newValue` - Composes (combines) functions together from left to right. Returns an evaluator that returns the output of the operation.

#### util/pipeWith
 `pipeWith(item, ...functions) => newValue` - Accepts an item as the first argument, and composes (combines) functions in the remaining arguments together from left to right. Returns the output of the operation.
 
#### util/compose
 `compose(...functions) => (value) => newValue` - Composes (combines) functions together from right to left. Returns an evaluator that returns the output of the operation.
 
#### util/overload
 `overload({...overloads}, overloadArgs: * = undefined) => Function` - Simulates function overloading in Javascript.

#### util/isAssociative
 `isAssociative(maybe: *) => boolean` - Works like Immutable.js `isAssociative` but also identifies plain Javascript arrays and objects as being associative.

#### util/isCollection
 `isCollection(maybe: *) => boolean` - Works like Immutable.js `isCollection` but also identifies plain Javascript arrays and objects as being collections.

#### util/isIndexed
 `isIndexed(maybe: *) => boolean` - Works like Immutable.js `isIndexed` but also identifies plain Javascript arrays as being indexed.

#### util/isKeyed
 `isKeyed(maybe: *) => boolean` - Works like Immutable.js `isKeyed` but also works on plain Javascript objects.

#### util/isOrdered
 `isOrdered(maybe: *) => boolean` - Works like Immutable.js `isOrdered` but also identifies plain Javascript arrays as being ordered.

#### util/isPlainObject
 `isPlainObject(maybe: *) => boolean` - Tests if something is a plain object according to [`is-plain-object`](https://www.npmjs.com/package/is-plain-object).

#### util/isValueObject
 `isValueObject(maybe: *) => boolean` - Works like Immutable.js `isValueObject` but also works on plain Javascript arrays and objects.

#### util/method
 `method(method: string) => (...methodArgs) => (value) => *` - Helper function that allows you to turn any method into a point-free version. For example, this creates a point free version of `toLowerCase()` that would call `value.toLowerCase()` once evaluated.

 ```
 import method from 'unmutable/lib/util/method';
 let toLowerCase = method('toLowerCase');
 toLowerCase()("HELLO"); // "hello"
 ```

#### util/recordAsObject
 `recordAsObject(updater: Function, value: *, returnRecord: boolean) => *` - Helper function that allows you to update an Immutable.js `Record`. The updater receives an object version of the `Record`. If `returnRecord = true`, the result of the updater will be passed back into the `Record`'s constructor before being returned. If `returnRecord = false`, the data returned from `updater` will be returned directly from `recordAsObject` without change.
