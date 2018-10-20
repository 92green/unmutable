# Unmutable Docs

Unmutable.js follows [Immutable.js](https://facebook.github.io/immutable-js/docs/)'s `Map` and `List` methods closely. For all Unmutable.js functions that have matching functions in Immutable.js, you can assume that they take the same arguments and do the same things.

Functions that normally work on `List`s will work on `List` and arrays, functions that normally work on `Map`s will work on `Map`s and objects.

It's a work in progress so not all functions have been implemented yet.

## Class instances and functions-as-objects

Experimental support has been added for class instances and functions being used as objects.
Currently these should work with methods that don't make changes to the data structure (`get`, `getIn`, `find` etc.)

## Custom data types

Experimental support has been added for custom data types, such as classes that you may write yourself. For a class instance to be unmutable compatible, it must have a key of `__UNMUTABLE_COMPATIBLE__` and set this to `true`. When unmutable finds this key on a `value`, it will try to call a method on that `value` and pass all arguments through. It is up to you to write the behaviour of each of the methods that unmutable may call on your class, and to ensure these behave immutably. If a method cannot be found on the `value`, and if a type-agnostic execution for the current function already exists in unmutable (this is a function called "all" in the unmutable source code), then unmutable will use the type-agnostic function instead. This means that by implementing a few basic methods like `has`, `get`, `set`, `delete`, `entries` etc, you should also be able to use unmutable functions such as `getIn`, `update`, `find` etc.

## Functions

All top level functions (the ones that aren't in the `util` directory) return an evaluator. An evaluator is a function that accepts a value and returns a result.

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
flatMap
flatten
forEach
get ^
getIn ^
groupBy - object and arrays cannot be grouped on deeply equal keys because plain objects cannot have objects as keys
has ^
hashCode - non-Immutable.js values are JSON stringified
hasIn ^
includes
indexOf *
insert *
interpose *
isEmpty ^
join
keyOf
keys ^
last
lastIndexOf *
lastKeyOf
map ^
max
maxBy
merge
mergeDeep
mergeDeepIn
mergeDeepWith
mergeIn
mergeWith
min
minBy
pop *
push *
reduce ^
reduceRight
rest
reverse
set ^
setIn ^
setSize *
shift *
splice *
size
skip
skipLast
skipUntil
skipWhile
slice
some
sort - works with arrays, lists and maps, but not objects because objects cannot be sorted
sortBy - works with arrays, lists and maps, but not objects because objects cannot be sorted
take
takeLast
takeUntil
takeWhile
toArray
toJS
toJSON
toObject
unshift *
update
updateIn
values ^
zip *
zipAll *
zipWith *
```

### To be implemented

```
countBy - will return an object rather than Seq.keyed for plain objects and arrays
flip
interleave *
isSubset
isSuperset
mapKeys
mapEntries
```

### Exceptions

The following functions will not be implemented in Unmutable.js

```
[Symbol.iterator]()
asMutable
asImmutable
entrySeq
fromEntrySeq
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

#### clone
`clone() => (value) => newValue` - Returns an evaluator that returns a clone of `value` if `value` is an array or object, or returns the `value` unchanged if given an Immutable.js `Map` or `List`. Immutable.js data types are inherently immutable so do not need to be explicitly cloned.

#### chunk
`chunk(size: number) => (value) => newValue` - Returns an evaluator that returns an array of "chunks". This function splits `value` up into chunks, where each chunk is of the same type as `value`, and contains `size` number of values.

#### chunkBy
`chunkBy(predicate: Function) => (value) => newValue` - Returns an evaluator that returns an array of "chunks". This function splits `value` up into chunks, where the size of each chunk is determined by the `predicate`. It iterates over `value` and calls `predicate` for each item on the collection. Whenever `predicate` returns true, a new chunk is started. It returns an array containing all the chunks that were created.

#### defaults
`defaults(defaults) => (value) => newValue` - Returns an evaluator that takes `value`, and adds to it any keys (and values) that exist on `defaults` and not on `value`. It is essentially `(defaults) => (value) => merge(value)(defaults)`

#### doIf
`doIf(predicate: Function, ifTrue: Function, ifFalse: Function = ii => ii) => (value) => newValue` - Returns an evaluator that passes the value to the predicate function. If the predicate returns true, the value is then passed through the `ifTrue` function and the result is returned. If the predicate returns false then the value is simply returned unchanged.

If the third argument `ifFalse` is provided, then the value will be passed through `ifFalse` when the predicate returns false.

#### entriesReverse
`entriesReverse() => (value) => Iterator` - Returns an evaluator that works just like `entries()`, but iterates in the reverse order.

#### entryArray
`entryArray() => (value) => Array` - Returns an evaluator that returns an array of entries (e.g. `[key, value]` tuples) of the value. Immutable.js has no function that does this, they have `entries()` which returns an iterator, and `entrySeq()` which returns an Immutable.js `Seq`.

#### identity
`identity() => (value) => value` - Returns an evaluator that just passes values through with no change. Useful for readable code.

#### isNotEmpty
`isNotEmpty() => (value) => boolean` - Returns an evaluator that returns true when the `value` is not empty.

#### keyArray
`keyArray() => (value) => Array` - Returns an evaluator that returns an array of keys on the value. Immutable.js has no function that does this, they have `keys()` which returns an iterator, and `keySeq()` which returns an Immutable.js `Seq`.

#### keyBy
`keyBy(keyer: Function) => (value) => Object` - Returns an evaluator that iterates over `value` and calls `keyer` on each item, and using the result as a key on the output object. TThe corresponding value of each key is the last element responsible for generating the key.

#### log
`log(message: string = "", type: string = "log") => (value) => value` - Returns an evaluator that passes the value through unchanged, but also calls `console[type](message, value)`. Useful for debugging.

#### move
`move(fromIndex: number, toIndex: number) => (value) => newValue` - Returns an evaluator that moves the element at `fromIndex` to the position of `toIndex`.

#### notEquals
`notEquals(other) => (value) => boolean` - Returns an evaluator that returns `true` if `value` and `other` are not deeply equal, or `false` otherwise.

#### omit
`omit(keys: string[]|number[]) => (value) => newValue` - For `Map` and object: Returns an evaluator that filters out all keys listed in `keys`.

#### pick
`pick(keys: string[]|number[]) => (value) => newValue` - For `Map` and object: Returns an evaluator that filters out all keys that aren't listed in `keys`.

#### pivot
`pivot() => (value) => newValue` - Returns an evaluator that pivots the value. The keys at the first level of nesting are moved to the second level, and the keys of the second level are moved to the first.

#### rename
`rename() => (oldKey: string|number, newKey: string|number) => newValue` - Returns an evaluator that changes the key of `oldKey` to the key of `newKey`. 

#### rotate
`rotate(shift: number) => (value) => newValue` - Returns an evaluator that rotates the elements in arrays and `Lists` around, according to the value of `shift`. A positive `shift` will move elements to the left, appending rotated elements to the end of the array, where as a negative `shift` will move elements to the right, prepending rotated elements to the start of the array.

#### size
`size() => (value) => number` - Returns an evaluator that returns the number of keys on the value. Immutable.js has this as a getter on their collections, Unmutable.js offers this as a function.

#### shallowEquals
`shallowEquals(other: *) => (value) => number` - Returns an evaluator that checks if `other` and `value` are shallowly equal, using strict equality. Note: use `equals()` if you want to check deep equality.

#### shallowToJS
`shallowToJS() => (value) => *` - Returns an evaluator that turns the `value` into plain Javascript if it is an Immutable.js data type. Internally if `value` is a `List` then `.toArray()` is called, and if value is a `Map` then `toObject()` is called. This is equivalent to Immutable.js `toJSON` function.

#### strictEquals
`strictEquals(other: *) => (value) => number` - Returns an evaluator that checks if `other` and `value` are strictly equal. This complements `equals()`, which checks for deep value equality.

#### swap
`swap(keyA: string|number, keyB: string|number) => (value) => newValue` - Returns an evaluator that will swap the values at the given keys. Keys that don't exist are assumed to have a value of `undefined`.

#### toIndexed
`toIndexed() => (value) => newValue` - Returns an evaluator that will turn plain Javascript data types into arrays, and will turn Immutable.js objects into `List`s.

#### toKeyed
`toKeyed() => (value) => newValue` - Returns an evaluator that will turn plain Javascript data types into objects, and will turn Immutable.js objects into `Map`s.

#### updateInto
`updateInto(key: string|number, updater: Function) => (value) => *` - Returns an evaluator that passes `value` to `updater`, and will set `value.key` to the result of the `updater`. In practise it works like `update(key, updater) => (value)` but where `updater` receives `value` instead of `value.key`.

#### unique
`unique() => (value) => *` - Returns an evaluator that filters `value` so that any element with a duplicate value is filtered out. If a non-primitive is returned from `getter`, it is compared deeply.

#### uniqueBy
`uniqueBy(getter: Function) => (value) => *` - Returns an evaluator that filters `value` according to the result of `getter`, so that any element with a duplicate result of `getter` is filtered out. If a non-primitive is returned from `getter`, it is compared deeply.

#### unit
`unit(newValue) => (value) => number` - Returns an evaluator that attempts to turn `newValue` into the `value`s data type, and returns `newValue`.

#### valueArray
`valueArray() => (value) => Array` - Returns an evaluator that returns an array of values on the value. Immutable.js has no function that does this, they have `values()` which returns an iterator, and `valueSeq()` which returns an Immutable.js `Seq`.

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

#### util/pipeIf
 `pipeIf((value) => boolean, ...functions) => newValue` - Like `pipe()`, but the first argument is a conditional function that is passed the `value`. If a truthy value is returned from the conditional function, all functions in the pipe are executed. If a falsey value is returned, then the remaining functions in the pipe are skipped.
 
#### util/pipeWith
 `pipeWith(value, ...functions) => newValue` - Accepts an value as the first argument, and composes (combines) functions in the remaining arguments together from left to right. Returns the output of the operation.
 
#### util/compose
 `compose(...functions) => (value) => newValue` - Composes (combines) functions together from right to left. Returns an evaluator that returns the output of the operation.
 
#### util/composeWith
 `composeWith(...functions, value) => newValue` - Composes (combines) functions together from right to left, and accepts an value as the *last* argument. Returns an evaluator that returns the output of the operation.

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

#### util/isObject
 `isObject(maybe: *) => boolean` - Tests if something extends from `object` and is not primitive, which includes arrays, functions, class instances and all Immutable.js types, and does not include `undefined`, `null`, `string`, `number`, and `boolean`.

#### util/isValueObject
 `isValueObject(maybe: *) => boolean` - Works like Immutable.js `isValueObject` but also works on plain Javascript arrays and objects.

#### util/method
 `method(method: string) => (...methodArgs) => (value) => *` - Helper function that allows you to turn any method into a point-free version. For example, this creates a point free version of `toLowerCase()` that would call `value.toLowerCase()` once evaluated.

 ```
 import method from 'unmutable/lib/util/method';
 let toLowerCase = method('toLowerCase');
 toLowerCase()("HELLO"); // "hello"
 ```

#### util/overload
`overload(overloads: Object) => Function` - Simulates function overloading. It accepts an object with number strings as keys, and functions to call as values. It returns the overloaded function. When the overloaded function is called with `x` arguments, the function with the key of `x` on the passed-in object will be called. If the overloaded function is called with a number of arguments not specified in the passed-in object, an error is thrown.

```
import overload from 'unmutable/lib/util/overload';
let fn = overload({
    ["2"]: (a, b) => `${a} ${b}`,
    ["3"]: (a, b, c) => `(${a} ${b}) ${c}`,
});

fn("!", "?"); // returns "! ?"
fn("!", "?", "*"); // returns "(! ?) *"
fun("!") // throws an error

```

#### util/range
`range([start=0], end, [step=1])` - Helper function to generate an array of sequential numbers. Simply a re-export of [lodash.range](https://lodash.com/docs/4.17.10#range)

#### util/recordAsObject
 `recordAsObject(updater: Function, value: *, returnRecord: boolean) => *` - Helper function that allows you to update an Immutable.js `Record`. The updater receives an object version of the `Record`. If `returnRecord = true`, the result of the updater will be passed back into the `Record`'s constructor before being returned. If `returnRecord = false`, the data returned from `updater` will be returned directly from `recordAsObject` without change.
