// @flow
export default function(config: Object): Array<Object> {
    const {
        only,
        sampleValue,
        existingValue,
        nonExistingValue,
        item,
        itemAlternative,
        itemAtKey,
        key,
        keyPath,
        nonExistingKey,
        partiallyExistingKeyPath,
        nonExistingKeyPath,
        negativeKey,
        nonExistingNegativeKey
    } = config;

    const emptyKeyPath = [];

    var tests = [
        {
            desc: "butLast",
            method: "butLast",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "clear",
            method: "clear",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "concat",
            method: "concat",
            args: (tt) => [itemAlternative],
            returnType: "self"
        },
        {
            desc: "count",
            method: "count",
            args: (tt) => [],
            returnType: "plain"
        },
        {
            desc: "delete key",
            method: "delete",
            args: (tt) => [key],
            returnType: "self"
        },
        {
            desc: "delete non-existing key",
            method: "delete",
            args: (tt) => [nonExistingKey],
            returnType: "self"
        },
        {
            // will exist in v4
            desc: "deleteAll",
            method: "deleteAll",
            args: (tt) => [[key, nonExistingKey]],
            returnType: "self"
        },
        {
            desc: "deleteIn keyPath",
            method: "deleteIn",
            args: (tt) => [keyPath],
            returnType: "self",
            deep: true
        },
        {
            desc: "deleteIn non-existing keyPath",
            method: "deleteIn",
            args: (tt) => [nonExistingKeyPath],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "deleteIn empty keyPath",
            method: "deleteIn",
            args: (tt) => [emptyKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "return false if a key returns false",
            method: "every",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "return true only if all keys return true",
            method: "every",
            args: (tt) => [ii => ii !== nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "filter",
            method: "filter",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "filterNot",
            method: "filterNot",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "can get first value",
            method: "first",
            args: (tt) => [],
            returnType: "wrapped"
        },
        {
            desc: "get existing key",
            method: "get",
            args: (tt) => [key],
            returnType: "wrapped"
        },
        {
            desc: "get existing negative key",
            method: "get",
            args: (tt) => [negativeKey],
            returnType: "wrapped",
            doWhen: !!negativeKey
        },
        {
            desc: "get key with default value",
            method: "get",
            args: (tt) => [key, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing key",
            method: "get",
            args: (tt) => [nonExistingKey],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing negative key",
            method: "get",
            args: (tt) => [nonExistingNegativeKey],
            returnType: "wrapped",
            doWhen: !!nonExistingNegativeKey
        },
        {
            desc: "get non-existing key with default value",
            method: "get",
            args: (tt) => [nonExistingKey, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "getIn keyPath",
            method: "getIn",
            args: (tt) => [keyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn keyPath with default value",
            method: "getIn",
            args: (tt) => [keyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath",
            method: "getIn",
            args: (tt) => [nonExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath with default value",
            method: "getIn",
            args: (tt) => [nonExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath",
            method: "getIn",
            args: (tt) => [partiallyExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath with default value",
            method: "getIn",
            args: (tt) => [partiallyExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn empty keyPath",
            method: "getIn",
            args: (tt) => [emptyKeyPath],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "has key",
            method: "has",
            args: (tt) => [key],
            returnType: "plain"
        },
        {
            desc: "has non-existing key",
            method: "has",
            args: (tt) => [nonExistingKey],
            returnType: "plain"
        },
        {
            desc: "hasIn keyPath",
            method: "hasIn",
            args: (tt) => [keyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn partially non-existing keyPath",
            method: "hasIn",
            args: (tt) => [partiallyExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn non-existing keyPath",
            method: "hasIn",
            args: (tt) => [nonExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn empty keyPath",
            method: "hasIn",
            args: (tt) => [emptyKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "includes existing value",
            method: "includes",
            args: (tt) => [existingValue],
            returnType: "plain"
        },
        {
            desc: "includes non-existing value",
            method: "includes",
            args: (tt) => [nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "insert",
            method: "insert",
            args: (tt) => [1, sampleValue],
            returnType: "self"
        },
        {
            desc: "insert negative index",
            method: "insert",
            args: (tt) => [-1, sampleValue],
            returnType: "self"
        },
        {
            desc: "interpose",
            method: "interpose",
            args: (tt) => [sampleValue],
            returnType: "self"
        },
        {
            desc: "interleave",
            method: "interleave",
            args: (tt) => [itemAlternative],
            returnType: "self"
        },
        {
            desc: "isEmpty",
            method: "isEmpty",
            args: (tt) => [],
            returnType: "plain"
        },
        {
            desc: "can get last value",
            method: "last",
            args: (tt) => [],
            returnType: "wrapped"
        },
        {
            desc: "map",
            method: "map",
            args: (tt) => [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "mapEntries",
            method: "mapEntries",
            args: (tt) => [([key, value]) => [key, `${value}!`]],
            returnType: "self"
        },
        {
            desc: "mapKeys",
            method: "mapKeys",
            args: (tt) => [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "merge",
            method: "merge",
            args: (tt) => [itemAlternative],
            returnType: "self"
        },
        // {
        //     desc: "mergeDeep",
        //     method: "mergeDeep",
        //     args: (tt) => [itemAlternative]
        // },
        // {
        //     desc: "mergeDeepWith",
        //     method: "mergeDeepWith",
        //     args: (tt) => [(oldVal, newVal) => oldVal / newVal, itemAlternative]
        // },
                // {
        //     desc: "mergeIn",
        //     method: "mergeIn",
        //     args: (tt) => [['b', 'x'], itemAlternative]
        // },
        // {
        //     desc: "mergeDeepIn",
        //     method: "mergeDeepIn",
        //     args: (tt) => [['b', 'x'], itemAlternative]
        // },
        {
            desc: "mergeWith",
            method: "mergeWith",
            args: (tt) => [(oldVal, newVal) => oldVal / newVal, itemAlternative],
            returnType: "self"
        },
        {
            desc: "push",
            method: "push",
            args: (tt) => [sampleValue],
            returnType: "self"
        },
        {
            desc: "pop",
            method: "pop",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "reverse",
            method: "reverse",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "rest",
            method: "rest",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "set key",
            method: "set",
            args: (tt) => [key, sampleValue],
            returnType: "self"
        },
        {
            desc: "set non-existing key",
            method: "set",
            args: (tt) => [nonExistingKey, sampleValue],
            returnType: "self"
        },
        {
            desc: "setIn keyPath",
            method: "setIn",
            args: (tt) => [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn partially non-existing keyPath",
            method: "setIn",
            args: (tt) => [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn non-existing keyPath",
            method: "setIn",
            args: (tt) => [nonExistingKeyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn empty keyPath",
            method: "setIn",
            args: (tt) => [emptyKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "shift",
            method: "shift",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "skip",
            method: "skip",
            args: (tt) => [1],
            returnType: "self"
        },
        {
            desc: "skipLast",
            method: "skipLast",
            args: (tt) => [1],
            returnType: "self"
        },
        {
            desc: "skipWhile (match existing value)",
            method: "skipWhile",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "skipUntil (match existing value)",
            method: "skipUntil",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "skipWhile (match nonExisting value)",
            method: "skipWhile",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "skipUntil (match nonExisting value)",
            method: "skipUntil",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "slice with no args",
            method: "slice",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "slice with begin",
            method: "slice",
            args: (tt) => [1],
            returnType: "self"
        },
        {
            desc: "slice with begin and end",
            method: "slice",
            args: (tt) => [1, 2],
            returnType: "self"
        },
        {
            desc: "slice with negative begin",
            method: "slice",
            args: (tt) => [-1],
            returnType: "self"
        },
        {
            desc: "slice with negative end",
            method: "slice",
            args: (tt) => [0, -1],
            returnType: "self"
        },
        {
            desc: "return true if a key returns true",
            method: "some",
            args: (tt) => [ii => ii === existingValue],
            returnType: "plain"
        },
        {
            desc: "return false only if no keys return true",
            method: "some",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "sort",
            method: "sort",
            args: (tt) => [],
            returnType: "self"
        },
        {
            desc: "sortBy",
            method: "sortBy",
            args: (tt) => [ii => ii],
            returnType: "self"
        },
        {
            desc: "take",
            method: "take",
            args: (tt) => [1],
            returnType: "self"
        },
        {
            desc: "takeLast",
            method: "takeLast",
            args: (tt) => [1],
            returnType: "self"
        },
        {
            desc: "takeWhile (match existing value)",
            method: "takeWhile",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "takeUntil (match existing value)",
            method: "takeUntil",
            args: (tt) => [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "takeWhile (match nonExisting value)",
            method: "takeWhile",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "takeUntil (match nonExisting value)",
            method: "takeUntil",
            args: (tt) => [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "unshift",
            method: "unshift",
            args: (tt) => [sampleValue],
            returnType: "self"
        },
        {
            desc: "update key",
            method: "update",
            args: (tt) => [
                key,
                (value) => {
                    tt && tt.deepEqual(value, itemAtKey);
                    return value + 100;
                }
            ],
            returnType: "self",
            callbackTests: 1
        },
        {
            desc: "update with no key",
            method: "update",
            args: (tt) => [
                (value) => {
                    tt && tt.deepEqual(value, item);
                    return value;
                }
            ],
            returnType: "wrapped",
            callbackTests: 1
        },
        {
            desc: "update non-existing key",
            method: "update",
            args: (tt) => [
                nonExistingKey,
                (value) => {
                    tt && tt.is(value, undefined);
                    return 100;
                }
            ],
            returnType: "self",
            callbackTests: 1
        },
        {
            desc: "update non-existing key with notSetValue",
            method: "update",
            args: (tt) => [
                nonExistingKey,
                sampleValue,
                (value) => {
                    tt && tt.is(value, sampleValue);
                    return value + 100;
                }
            ],
            returnType: "self",
            callbackTests: 1
        },
        {
            desc: "updateIn keyPath",
            method: "updateIn",
            args: (tt) => [keyPath, ii => ii + 100],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn non-existing keyPath",
            method: "updateIn",
            args: (tt) => [nonExistingKeyPath, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn non-existing keyPath with notSetValue",
            method: "updateIn",
            args: (tt) => [nonExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn partially existing keyPath",
            method: "updateIn",
            args: (tt) => [partiallyExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn empty keyPath",
            method: "updateIn",
            args: (tt) => [emptyKeyPath, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        }

        // flatMap
        // groupBy
    ];

    tests = tests.filter((ii: Object) => !ii.hasOwnProperty('doWhen') || ii.doWhen);

    if(only) {
        tests = only.reduce((filteredTests: Array<Object>, methodName: string): Array<Object> => {
            let append = tests.filter(ii => ii.method === methodName);
            if(append.length === 0) {
                console.warn(`"${methodName}" has no associated tests`);
            }
            return [...filteredTests, ...append];
        }, []);
    }

    return tests.map(ii => ({...ii, item}));
}
