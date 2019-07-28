// @flow
import React from 'react';
import Layout from '../../layout/Layout';
import ApiItem from '../../component/ApiItem';
import ApiPage from '../../component/ApiPage';
import MarkdownAfter from '../../docs/api/after.mdx';
import MarkdownBefore from '../../docs/api/before.mdx';

import {Typography} from 'dcme-style';
import {map} from 'unmutable';
import {set} from 'unmutable';

const withRenderer = map(set('renderWith', ApiItem));

const sections = [
    {
        title: "Functions",
        description: "???",
        items: [
            {
                title: "Persistent changes",
                items: withRenderer([
                    {
                        name: "set()",
                        definition: "set(key: string|number, value: any) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection also containing the new key, value pair. If an equivalent key already exists in this collection, it will be replaced."
                        + "\n\nWhen used with an indexed data type, `key` may be a negative number, which indexes back from the end of the collection."
                        + "\n\nIf index larger than size, the returned collections's size will be large enough to include the index.",
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"],
                        example: [
                            `
                                let data = {a: 'foo', b: 'bar'};

                                set('a', 'baz')(data);
                            `,
                            `
                                let data = ['foo','bar','baz'];

                                set(1, 'qux')(data);
                            `,
                            `
                                let data = ['foo','bar','baz'];

                                set(-1, 'qux')(data);
                            `
                        ]
                    },
                    {
                        name: "delete()",
                        definition: "delete(key: string|number) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection which excludes this key."
                        + "\n\nWhen used with an indexed data type, this returns a new collection which excludes this index and with a size 1 less than this collection. Values at indices above index are shifted down by 1 to fill the position.",
                        aliases: ["remove"],
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"],
                        example: [
                            `
                                let data = {a: 'foo', b: 'bar'};

                                delete('a')(data);
                            `,
                            `
                                let data = ['foo','bar','baz'];

                                delete(1)(data);
                            `,
                            `
                                let data = ['foo','bar','baz'];

                                delete(-1)(data);
                            `
                        ]
                    },
                    {
                        name: "deleteAll()",
                        definition: "deleteAll(key) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection which excludes the provided keys.",
                        aliases: ["omit"],
                        types: ["object", "uc", "imap"],
                        example: [
                            `
                                let data = {a: 'foo', b: 'bar', c: 'baz'};

                                deleteAll(['a','b'])(data);
                            `
                        ]
                    },
                    {
                        name: "pick()",
                        definition: "pick(keys: string[]|number[]) => (collection) => newCollection",
                        description: "Returns a new collection which excludes all keys that aren't listed in `keys`.",
                        types: ["object", "uc", "imap"],
                        example: [
                            `
                                let data = {a: 'foo', b: 'bar', c: 'baz'};

                                pick(['a','b'])(data);
                            `
                        ]
                    },
                    {
                        name: "insert()",
                        description: ""
                    },
                    {
                        name: "clear()",
                        definition: "clear() => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection containing no keys or values.",
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"],
                        example: [
                            `
                                let data = {a: 'foo', b: 'bar'};

                                clear()(data);
                            `,
                            `
                                let data = ['foo','bar','baz'];

                                clear()(data);
                            `
                        ]
                    },
                    {
                        name: "push()",
                        definition: "push(...values: Array<any>) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection with the provided `values` appended, starting at this collection's `size`.",
                        types: ["array", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                push('qux')(data);
                            `
                        ]
                    },
                    {
                        name: "pop()",
                        definition: "pop() => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection with a size ones less than this collection, excluding the last index in this collection.",
                        types: ["array", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                pop()(data);
                            `
                        ]
                    },
                    {
                        name: "unshift()",
                        definition: "unshift(...values: Array<any>) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection with the provided `values` prepended, shifting other values ahead to higher indices.",
                        types: ["array", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                unshift('qux')(data);
                            `
                        ]
                    },
                    {
                        name: "shift()",
                        definition: "shift() => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection with a size ones less than this collection, excluding the first index in this collection, shifting all other values to a lower index.",
                        types: ["array", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                shift()(data);
                            `
                        ]
                    },
                    {
                        name: "move()",
                        definition: "move(fromIndex: number, toIndex: number) => (collection) => newCollection",
                        description: "Moves the element at `fromIndex` to the position of `toIndex`."
                    },
                    {
                        name: "update()",
                        definition: `update(key: string|number, notSetValue: any, updater: (value: any) => any) => (collection) => newCollection
update(key: string|number, updater: (value: any) => any) => (collection) => newCollection
update(updater: (collection: any) => any) => (collection) => newCollection`,
                        immutablejs: true,
                        description: "Returns a new collection having updated the value at this `key` with the return value of calling `updater` with the existing value.",
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"]
                    },
                    {
                        name: "updateInto()",
                        definition: "updateInto(key: string|number, updater: (collection) => newValue) => (collection) => newCollection",
                        description: "Passes `collection` to `updater`, and will set `collection[key]` to the result of the `updater`. In practise it works a bit like `update(key, updater)`, but in this case `updater` receives `collection` instead of `collection[key]`."
                    },
                    {
                        name: "merge()",
                        definition: "merge(...otherCollections: Array<Collection>) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection resulting from merging the provided `otherCollections` into this collection. In other words, this takes each entry of each `otherCollection` and sets it on this collection.",
                        aliases: ["concat"],
                        types: ["object", "array", "uc", "imap", "ilist"]
                    },
                    {
                        name: "mergeWith()",
                        definition: `mergeWith(
    merger: (oldValue: any, newValue: any, key: string) => value,
    ...otherCollections: Array<Collection>) => (collection) => newCollection
)`,
                        immutablejs: true,
                        description: "Like merge(), mergeWith() returns a new collection resulting from merging the provided `otherCollections` into this collection, but uses the merger function for dealing with conflicts.",
                        types: ["object", "uc", "imap"]
                    },
                    {
                        name: "mergeDeep()",
                        description: ""
                    },
                    {
                        name: "mergeDeepWith()",
                        description: ""
                    },
                    {
                        name: "defaults()",
                        description: ""
                    },
                    {
                        name: "setSize()",
                        definition: "setSize(size: number) => (collection) => newCollection",
                        immutablejs: true,
                        description: "Returns a new collection with size size. If size is less than this collection's size, the new collection will exclude values at the higher indices. If size is greater than this collection's size, the new collection will have undefined values for the newly available indices.",
                        types: ["array", "ilist"]
                    },
                    {
                        name: "rename()",
                        definition: "rename(oldKey: string|number, newKey: string|number) => (collection) => newCollection",
                        description: "Changes the key of `oldKey` to the key of `newKey`"
                    },
                    {
                        name: "swap()",
                        definition: "swap(keyA: string|number, keyB: string|number) => (collection) => newCollection",
                        description: "Swaps the values at the given keys. Keys that don't exist are assumed to have a value of `undefined`."
                    },
                    {
                        name: "rotate()",
                        definition: "rotate(shift: number) => (collection) => newCollection",
                        description: "Rotates the elements in arrays and `Lists` around, according to the value of `shift`. A positive `shift` will move elements to the left, appending rotated elements to the end of the array, where as a negative `shift` will move elements to the right, prepending rotated elements to the start of the array."
                    },
                    {
                        name: "unit()",
                        definition: "unit(otherCollection) => (collection) => newCollection",
                        description: "Attempts to turn `otherCollection` into `collection`s data type, and returns `newCollection`."
                    }
                ])
            },
            {
                title: "Deep persistent changes",
                items: withRenderer([
                    {
                        name: "setIn()",
                        description: ""
                    },
                    {
                        name: "deleteIn()",
                        description: ""
                    },
                    {
                        name: "updateIn()",
                        description: ""
                    },
                    {
                        name: "mergeIn()",
                        description: ""
                    },
                    {
                        name: "mergeDeepIn()",
                        description: ""
                    }
                ])
            },
            {
                title: "Sequence algorithms",
                items: withRenderer([
                    {
                        name: "concat()",
                        description: ""
                    },
                    {
                        name: "map()",
                        description: ""
                    },
                    {
                        name: "flatMap()",
                        description: ""
                    },
                    {
                        name: "filter()",
                        description: ""
                    },
                    {
                        name: "zip()",
                        description: ""
                    },
                    {
                        name: "zipAll()",
                        description: ""
                    },
                    {
                        name: "zipWith()",
                        description: ""
                    },
                    {
                        name: "filterNot()",
                        description: ""
                    },
                    {
                        name: "reverse()",
                        description: ""
                    },
                    {
                        name: "sort()",
                        description: ""
                    },
                    {
                        name: "sortBy()",
                        description: ""
                    },
                    {
                        name: "groupBy()",
                        description: ""
                    },
                    {
                        name: "chunk()",
                        definition: "chunk(size: number) => (collection) => newCollection",
                        description: "Returns an array of 'chunks'. This function splits `collection` up into chunks, where each chunk is of the same type as `collection`, and contains `size` number of values."
                    },
                    {
                        name: "chunkBy()",
                        definition: "chunkBy(predicate: Function) => (collection) => newCollection",
                        description: "Returns an array of 'chunks'. This function splits `collection` up into chunks, where the size of each chunk is determined by the `predicate`. It iterates over `collection` and calls `predicate` for each item on the collection. Whenever `predicate` returns true, a new chunk is started. It returns an array containing all the chunks that were created."
                    },
                    {
                        name: "deal()",
                        definition: "deal(groups: number) => (collection) => newCollection",
                        description: "Returns an array of 'chunks'. This function iterates over `collection`, dividing it into the number of groups specified by the `groups` argument. It works in a similar way to someone dealing out cards to a number of players, putting the first item in the first group, the second item in the second group etc. Once the last group is reached, the next item is put in the first group again, and the deal continues cyclically until no items are left."
                    },
                    {
                        name: "keyBy()",
                        definition: "keyBy(keyer: (value) => string) => (value) => {[key: string]: value} // Object",
                        description: "Iterates over `collection` and calls `keyer` on each item, and using the result as a key on the output object. TThe corresponding value of each key is the last element responsible for generating the key."
                    },

                    {
                        name: "unique()",
                        definition: "unique() => (collection) => newCollection",
                        description: "Filters `collection` so that any element with a duplicate value is filtered out. If the value is a collection it is compared deeply."
                    },
                    {
                        name: "uniqueBy()",
                        definition: "uniqueBy(getter: (collection) => any) => (collection) => newCollection",
                        description: "Filters `collection` according to the result of `getter`, so that any element with a duplicate result of `getter` is filtered out. If a collection is returned from `getter`, it is compared deeply."
                    }
                ])
            },
            {
                title: "Conversion to JavaScript types",
                items: withRenderer([
                    {
                        name: "toArray()",
                        description: ""
                    },
                    {
                        name: "toIndexed()",
                        definition: "toIndexed() => (collection) => newCollection",
                        description: "Converts plain Javascript data types into arrays, and converts Immutable.js objects into `List`s"
                    },
                    {
                        name: "toJS()",
                        description: ""
                    },
                    {
                        name: "toJSON()",
                        definition: "toJSON() => (collection) => any",
                        description: "Turns the `collection` into plain Javascript if it is an Immutable.js data type. Internally if `collection` is a `List` then `.toArray()` is called, and if collection is a `Map` then `toObject()` is called.",
                        aliases: ["shallowToJS()"]
                    },
                    {
                        name: "toKeyed()",
                        definition: "toKeyed() => (collection) => newCollection",
                        description: "Converts plain Javascript data types into objects, and converts Immutable.js objects into `Map`s."
                    },
                    {
                        name: "toObject()",
                        description: ""
                    }
                ])
            },
            {
                title: "Reading values",
                items: withRenderer([
                    {
                        name: "get()",
                        description: ""
                    },
                    {
                        name: "has()",
                        description: ""
                    },
                    {
                        name: "includes()",
                        description: ""
                    },
                    {
                        name: "first()",
                        description: ""
                    },
                    {
                        name: "last()",
                        description: ""
                    }
                ])
            },
            {
                title: "Combination",
                items: withRenderer([
                    {
                        name: "interpose()",
                        description: ""
                    },
                    {
                        name: "splice()",
                        description: ""
                    },
                    {
                        name: "flatten()",
                        description: ""
                    },
                    {
                        name: "pivot()",
                        definition: "pivot() => (collection) => newCollection",
                        description: "Pivots the collection. The keys at the first level of nesting are moved to the second level, and the keys of the second level are moved to the first."
                    }
                ])
            },
            {
                title: "Search for value",
                items: withRenderer([
                    {
                        name: "indexOf()",
                        description: ""
                    },
                    {
                        name: "lastIndexOf()",
                        description: ""
                    },
                    {
                        name: "findIndex()",
                        description: ""
                    },
                    {
                        name: "findLastIndex()",
                        description: ""
                    },
                    {
                        name: "find()",
                        description: ""
                    },
                    {
                        name: "findEntry()",
                        description: ""
                    },
                    {
                        name: "findLast()",
                        description: ""
                    },
                    {
                        name: "findLastEntry()",
                        description: ""
                    },
                    {
                        name: "findKey()",
                        description: ""
                    },
                    {
                        name: "findLastKey()",
                        description: ""
                    },
                    {
                        name: "keyOf()",
                        description: ""
                    },
                    {
                        name: "lastKeyOf()",
                        description: ""
                    },
                    {
                        name: "max()",
                        description: ""
                    },
                    {
                        name: "maxBy()",
                        description: ""
                    },
                    {
                        name: "min()",
                        description: ""
                    },
                    {
                        name: "minBy()",
                        description: ""
                    }
                ])
            },
            {
                title: "Value equality",
                items: withRenderer([
                    {
                        name: "equals()",
                        definition: "`equals(otherValue) => (value) => boolean`",
                        description: "Returns `true` if `value` and `otherValue` are deeply equal, or `false` otherwise.",
                        note: "This function compares items by value, so two different class instances containing the same data in the same manner (e.g. an array and an Immutable.js List) will be regarded as equal. Consider also using equalsType() if this is a problem for you."
                    },
                    {
                        name: "notEquals()",
                        definition: "notEquals(otherValue) => (value) => boolean",
                        description: "Returns `true` if `value` and `otherValue` are not deeply equal, or `false` otherwise."
                    },
                    {
                        name: "strictEquals()",
                        definition: "strictEquals(otherCollection: any) => (collection: any) => number",
                        description: "Checks if `collection` and `otherCollection` are strictly equal. This complements `equals()`, which checks for deep value equality."
                    },
                    {
                        name: "shallowEquals()",
                        definition: "shallowEquals(otherCollection: any) => (collection: any) => number",
                        description: "Checks if `collection` and `otherCollection` are shallowly equal, using strict equality.",
                        note: "Use `equals()` if you want to check deep equality."
                    },
                    {
                        name: "hashCode()",
                        description: ""
                    },
                    {
                        name: "equalsType()",
                        definition: "`equalsType(otherValue: any) => (value: any) => boolean`",
                        description: "Returns `true` if `value` and `otherValue` are of the same type, or `false` otherwise. Class instances only count as equal if they are instances of the same class. Also unlike the type returned by `typeof`, `null` is *not* equal to objects, and are only equal to `null`."
                    }
                ])
            },
            {
                title: "Reading deep values",
                items: withRenderer([
                    {
                        name: "getIn()",
                        description: ""
                    },
                    {
                        name: "hasIn()",
                        description: ""
                    }
                ])
            },
            {
                title: "Iterators",
                items: withRenderer([
                    {
                        name: "keys()",
                        description: ""
                    },
                    {
                        name: "values()",
                        description: ""
                    },
                    {
                        name: "entries()",
                        definition: "entriesReverse() => (collection) => Iterator",
                        description: "Works just like `entries()`, but iterates in the reverse order."
                    },
                    {
                        name: "entriesReverse()",
                        description: ""
                    }
                ])
            },
            {
                title: "Iterator to array",
                items: withRenderer([
                    {
                        name: "keyArray()",
                        definition: "keyArray() => (collection) => Array<key>",
                        description: "Returns an array of keys on the value. Immutable.js has no function that does this, they have `keys()` which returns an iterator, and `keySeq()` which returns an Immutable.js `Seq`."
                    },
                    {
                        name: "valueArray()",
                        definition: "valueArray() => (collection) => Array<any>",
                        description: "Returns an array of values on the collection. Immutable.js has no function that does this, they have `values()` which returns an iterator, and `valueSeq()` which returns an Immutable.js `Seq`."
                    },
                    {
                        name: "entryArray()",
                        definition: "entryArray() => (collection) => Array<[key, value]>",
                        description: "Returns an array of entries (e.g. `[key, value]` tuples) of the value. Immutable.js has no function that does this, they have `entries()` which returns an iterator, and `entrySeq()` which returns an Immutable.js `Seq`."
                    }
                ])
            },
            {
                title: "Side effects",
                items: withRenderer([
                    {
                        name: "forEach()",
                        description: ""
                    }
                ])
            },
            {
                title: "Creating subsets",
                items: withRenderer([
                    {
                        name: "slice()",
                        description: ""
                    },
                    {
                        name: "rest()",
                        description: ""
                    },
                    {
                        name: "butLast()",
                        definition: "butLast() => (collection) => newCollection",
                        description: "Returns a new collection of the same type containing all entries except the last.",
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                butLast()(data);
                            `
                        ]
                    },
                    {
                        name: "skip()",
                        description: ""
                    },
                    {
                        name: "skipLast()",
                        description: ""
                    },
                    {
                        name: "skipUntil()",
                        description: ""
                    },
                    {
                        name: "skipWhile()",
                        description: ""
                    },
                    {
                        name: "take()",
                        description: ""
                    },
                    {
                        name: "takeLast()",
                        description: ""
                    },
                    {
                        name: "takeUntil()",
                        description: ""
                    },
                    {
                        name: "takeWhile()",
                        description: ""
                    }
                ])
            },
            {
                title: "Reducing a value",
                items: withRenderer([
                    {
                        name: "reduce()",
                        description: ""
                    },
                    {
                        name: "reduceRight()",
                        description: ""
                    },
                    {
                        name: "every()",
                        description: ""
                    },
                    {
                        name: "some()",
                        description: ""
                    },
                    {
                        name: "join()",
                        description: ""
                    },
                    {
                        name: "isEmpty()",
                        definition: "isEmpty() => (collection) => boolean",
                        description: "Returns true when the `collection` is empty, such as an empty object or an array with no elements."
                    },
                    {
                        name: "isNotEmpty()",
                        definition: "isNotEmpty() => (collection) => boolean",
                        description: "Returns true when the `collection` is not empty."
                    },
                    {
                        name: "count()",
                        definition: "count() => (collection) => number",
                        description: "Returns the number of keys on the collection.",
                        aliases: ["size()"]
                    },
                    {
                        name: "size()",
                        definition: "size() => (collection) => number",
                        description: "Returns the number of keys on the collection. Immutable.js has this as a getter on their collections, Unmutable.js offers this as a function.",
                        aliases: ["count()"]
                    },
                    {
                        name: "startsWith()",
                        definition: "startsWith(otherCollection) => (collection) => boolean",
                        description: "Returns true when the `collection` starts with `otherCollection`. The elements of `otherCollection` are compared deeply with those in `collection`.",
                        types: ["object", "array", "uc", "imap", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                startsWith(['foo','bar'])(data);
                            `
                        ]
                    },
                    {
                        name: "endsWith()",
                        definition: "endsWith(otherCollection) => (collection) => boolean",
                        description: "Returns true when the `collection` starts with `otherCollection`. The elements of `otherCollection` are compared deeply with those in `collection`.",
                        types: ["object", "array", "uc", "imap", "ilist"],
                        example: [
                            `
                                let data = ['foo','bar','baz'];

                                endsWith(['bar','baz'])(data);
                            `
                        ]
                    }
                ])
            },
            {
                title: "Cloning",
                items: withRenderer([
                    {
                        name: "clone()",
                        definition: "clone() => (collection) => newCollection",
                        description: "Returns a clone of `collection` if `collection` is an array or object, or returns the `collection` unchanged if given an Immutable.js `Map` or `List`. Immutable.js data types are inherently immutable so do not need to be explicitly cloned."
                    },
                    {
                        name: "replaceEqual()",
                        definition: "replaceEqual(otherCollection) => (collection) => newCollection",
                        description: "If `otherCollection` is deeply equal to `collection`, `otherCollection` is returned, or else `collection` is returned.\n\nThis can be useful if you have a data source that always recreates a data structure, such as `JSON.parse()`, but you want to avoid needlessly passing new instances of unchanged objects and arrays downstream.",
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"],
                        example: [
                            `
                                let oldData = ['foo','bar','baz'];
                                let newData = ['foo','bar','baz'];

                                let data = replaceEqual(oldData)(newData);
                                // data equals ['foo','bar','baz']
                                data === oldData
                            `
                        ]
                    },
                    {
                        name: "replaceEqualDeep()",
                        definition: "replaceEqualDeep(otherCollection) => (collection) => newCollection",
                        description: "If `otherCollection` is deeply equal to `collection`, `otherCollection` is returned. If not, each of `collection`s children are compared against `otherCollection`, and if they are deeply equal then that part of `otherCollection` is inserted into the result. This process continues recursively down the data structure.\n\nThis can be useful if you have a data source that always recreates a data structure, such as `JSON.parse()`, but you want to avoid needlessly passing new instances of unchanged objects and arrays downstream.",
                        types: ["object", "array", "uc", "imap", "ilist", "irecord"],
                        example: [
                            `
                                let oldData = [1,2,[10,20]];
                                let newData = [3,4,[10,20]];

                                let data = replaceEqualDeep(oldData)(newData);
                                // data equals [3,4,[10,20]]
                                data[2] === oldData[2]
                            `
                        ]
                    }
                ])
            },
            {
                title: "Debugging",
                items: withRenderer([
                    {
                        name: "log()",
                        definition: "log(message: string = '', type: string = 'log') => (value) => value",
                        description: "Returns an evaluator that passes the value through unchanged, but also calls `console[type](message, value)`. Useful for debugging."
                    }
                ])
            }
        ]
    },
    {
        title: "Utils",
        description: "Utils include functions that make Unmutable.js useable and useful, as well as plain-Javascript friendly versions of some of Immutable.js top level functions.",
        items: withRenderer([
            {
                title: "Composition",
                items: withRenderer([
                    {
                        name: "compose()",
                        definition: "compose(...functions: Array<Function>) => (value) => newValue",
                        description: "Composes (combines) functions together from right to left. Returns a function that's ready to accept a value and run it through all the functions in the pipe."
                    },
                    {
                        name: "composeWith()",
                        definition: "composeWith(value, ...functions: Array<Function>) => (value) => newValue",
                        description: "Accepts an value as the first argument, and composes (combines) functions in the remaining arguments together from right to left.",
                        note: "`composeWith(value, ...functions) is equivalent to compose(...functions)(value)`"
                    },
                    {
                        name: "pipe()",
                        definition: "pipe(...functions: Array<Function>) => (value) => newValue",
                        description: "Composes (combines) functions together from left to right. Returns a function that's ready to accept a value and run it through all the functions in the pipe."
                    },
                    {
                        name: "pipeIf()",
                        definition: "pipeIf(condition: (value) => boolean, ...functions: Array<Function>) => (value) => newValue",
                        description: "Like `pipe()`, but the first argument is a conditional function that is passed the `value`. If a truthy value is returned from the conditional function, all functions in the pipe are executed. If a falsey value is returned, then the remaining functions in the pipe are skipped."
                    },
                    {
                        name: "pipeWith()",
                        definition: "pipeWith(value, ...functions: Array<Function>) => (value) => newValue",
                        description: "Accepts an value as the first argument, and composes (combines) functions in the remaining arguments together from left to right.",
                        note: "`pipeWith(value, ...functions) is equivalent to pipe(...functions)(value)`"
                    },
                    {
                        name: "identity()",
                        definition: "identity() => (value) => value",
                        description: "A function that passes values through with no change. Useful for readable code."
                    }
                ])
            },
            {
                title: "Predicates",
                items: withRenderer([
                    {
                        name: "isAssociative()",
                        definition: "isAssociative(value: any) => boolean",
                        description: "Works like Immutable.js `isAssociative()` but also identifies plain Javascript arrays and objects as being associative."
                    },
                    {
                        name: "isCollection()",
                        definition: "isCollection(value: any) => boolean",
                        description: "Works like Immutable.js `isCollection()` but also identifies plain Javascript arrays and objects as being collections.",
                        note: "Immutable.js' definition of 'collection' does *not* include Immutable.js Records."
                    },
                    {
                        name: "isImmutable()",
                        definition: "isImmutable(value: any) => boolean",
                        description: "Returns true if `value` is an Immutable.js data type, or false otherwise."
                    },
                    {
                        name: "isIndexed()",
                        definition: "isIndexed(value: any) => boolean",
                        description: "Works like Immutable.js `isIndexed()` but also identifies plain Javascript arrays as being indexed."
                    },
                    {
                        name: "isKeyed()",
                        definition: "isKeyed(value: any) => boolean",
                        description: "Works like Immutable.js `isKeyed()` but also identifies plain Javascript objects as being keyed."
                    },
                    {
                        name: "isObject()",
                        definition: "isObject(value: any) => boolean",
                        description: "Tests if something extends from `object` and is not primitive, which includes arrays, functions, class instances and all Immutable.js types, and does *not* include `undefined`, `null`, `string`, `number`, and `boolean`.",
                        aliases: ["isValueObject()"]
                    },
                    {
                        name: "isOrdered()",
                        definition: "isOrdered(value: any) => boolean",
                        description: "Works like Immutable.js `isOrdered()` but also identifies plain Javascript arrays as being ordered."
                    },
                    {
                        name: "isPlainObject()",
                        definition: "isPlainObject(value: any) => boolean",
                        description: "Tests if the value is a plain object according to [is-plain-object](https://www.npmjs.com/package/is-plain-object)."
                    },
                    {
                        name: "isRecord()",
                        definition: "isRecord(value: any) => boolean",
                        description: ""
                    },
                    {
                        name: "isValueObject()",
                        definition: "isValueObject(value: any) => boolean",
                        description: "An alias for `isObject()` to align with Immutable.js naming convention.",
                        aliases: ["isObject()"]
                    },
                    {
                        name: "isWriteable()",
                        definition: "isWriteable(value: any) => boolean",
                        description: "Tests if a data type can be used with unmutable functions that write or modify data. Returns true for any Immutable.js types, array and plain objects."
                    }
                ])
            },
            {
                title: "Method creation",
                items: withRenderer([
                    {
                        name: "method()",
                        description: "A helper function that allows you to turn any method into a point-free function.",
                        example: `// this creates a point free version of \`toLowerCase()\` that would call \`value.toLowerCase()\` once evaluated.
import {method} from 'unmutable';
         let toLowerCase = method('toLowerCase');
         toLowerCase()("HELLO"); // "hello"`
                    },
                    {
                        name: "overload()",
                        definition: "overload({[arity: string]: Function})",
                        description: "Simulates function overloading in Javascript. Pass it an object with functions as values. The objects keys should be strings of numbers that indicate how many arguments each function expects to receive.",
                        example: `import overload from 'unmutable/lib/overload';
        let fn = overload({
            ["2"]: (a, b) => \`\${a} \${b}\`,
            ["3"]: (a, b, c) => \`(\${a} \${b}) \${c}\`,
        });

        fn("!", "?"); // returns "! ?"
        fn("!", "?", "*"); // returns "(! ?) *"
        fun("!") // throws an error`
                    }
                ])
            },
            {
                title: "Conditionals",
                items: withRenderer([
                    {
                        name: "doIf()",
                        definition: "doIf(\n    predicate: (value) => boolean,\n    ifTrue: (value) => newValue,\n    ifFalse: (value) => newValue = ii => ii\n) => (value) => newValue",
                        description: "Passes the value to the predicate function. If the predicate returns true, the value is then passed through the `ifTrue` function and the result is returned. If the predicate returns false then the value is simply returned unchanged.\n\nIf the third argument `ifFalse` is provided, then the value will be passed through `ifFalse` when the predicate returns false."
                    }
                ])
            },
            {
                title: "Dataset generation",
                items: withRenderer([
                    {
                        name: "range()",
                        definition: "range([start = 0], end, [step = 1])",
                        description: "Helper function to generate an array of sequential numbers. Simply a re-export of [lodash.range](https://lodash.com/docs/4.17.10#range)"
                    }
                ])
            }
        ])
    }
];

export default () => <Layout>
    <ApiPage
        after={<Typography><MarkdownAfter /></Typography>}
        before={<Typography><MarkdownBefore /></Typography>}
        sections={sections}
    />
</Layout>;
