// @flow
export default function(config: Object): Array<Object> {
    const {
        only,
        sampleValue,
        existingValue,
        nonExistingValue,
        item,
        itemAlternative,
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
            args: [],
            returnType: "self"
        },
        {
            desc: "clear",
            method: "clear",
            args: [],
            returnType: "self"
        },
        {
            desc: "concat",
            method: "concat",
            args: [itemAlternative],
            returnType: "self"
        },
        {
            desc: "count",
            method: "count",
            args: [],
            returnType: "plain"
        },
        {
            desc: "delete key",
            method: "delete",
            args: [key],
            returnType: "self"
        },
        {
            desc: "delete non-existing key",
            method: "delete",
            args: [nonExistingKey],
            returnType: "self"
        },
        {
            // will exist in v4
            desc: "deleteAll",
            method: "deleteAll",
            args: [[key, nonExistingKey]],
            returnType: "self"
        },
        {
            desc: "deleteIn keyPath",
            method: "deleteIn",
            args: [keyPath],
            returnType: "self",
            deep: true
        },
        {
            desc: "deleteIn non-existing keyPath",
            method: "deleteIn",
            args: [nonExistingKeyPath],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "deleteIn empty keyPath",
            method: "deleteIn",
            args: [emptyKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "return false if a key returns false",
            method: "every",
            args: [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "return true only if all keys return true",
            method: "every",
            args: [ii => ii !== nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "filter",
            method: "filter",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "filterNot",
            method: "filterNot",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "can get first value",
            method: "first",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "get existing key",
            method: "get",
            args: [key],
            returnType: "wrapped"
        },
        {
            desc: "get existing negative key",
            method: "get",
            args: [negativeKey],
            returnType: "wrapped",
            doWhen: !!negativeKey
        },
        {
            desc: "get key with default value",
            method: "get",
            args: [key, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing key",
            method: "get",
            args: [nonExistingKey],
            returnType: "wrapped"
        },
        {
            desc: "get non-existing negative key",
            method: "get",
            args: [nonExistingNegativeKey],
            returnType: "wrapped",
            doWhen: !!nonExistingNegativeKey
        },
        {
            desc: "get non-existing key with default value",
            method: "get",
            args: [nonExistingKey, sampleValue],
            returnType: "wrapped"
        },
        {
            desc: "getIn keyPath",
            method: "getIn",
            args: [keyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn keyPath with default value",
            method: "getIn",
            args: [keyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath",
            method: "getIn",
            args: [nonExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn non-existing keyPath with default value",
            method: "getIn",
            args: [nonExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath",
            method: "getIn",
            args: [partiallyExistingKeyPath],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn partially non-existing keyPath with default value",
            method: "getIn",
            args: [partiallyExistingKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "getIn empty keyPath",
            method: "getIn",
            args: [emptyKeyPath],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "has key",
            method: "has",
            args: [key],
            returnType: "plain"
        },
        {
            desc: "has non-existing key",
            method: "has",
            args: [nonExistingKey],
            returnType: "plain"
        },
        {
            desc: "hasIn keyPath",
            method: "hasIn",
            args: [keyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn partially non-existing keyPath",
            method: "hasIn",
            args: [partiallyExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn non-existing keyPath",
            method: "hasIn",
            args: [nonExistingKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "hasIn empty keyPath",
            method: "hasIn",
            args: [emptyKeyPath],
            returnType: "plain",
            deep: true
        },
        {
            desc: "includes existing value",
            method: "includes",
            args: [existingValue],
            returnType: "plain"
        },
        {
            desc: "includes non-existing value",
            method: "includes",
            args: [nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "insert",
            method: "insert",
            args: [1, sampleValue],
            returnType: "self"
        },
        {
            desc: "insert negative index",
            method: "insert",
            args: [-1, sampleValue],
            returnType: "self"
        },
        {
            desc: "interpose",
            method: "interpose",
            args: [sampleValue],
            returnType: "self"
        },
        {
            desc: "interleave",
            method: "interleave",
            args: [itemAlternative],
            returnType: "self"
        },
        {
            desc: "isEmpty",
            method: "isEmpty",
            args: [],
            returnType: "plain"
        },
        {
            desc: "can get last value",
            method: "last",
            args: [],
            returnType: "wrapped"
        },
        {
            desc: "map",
            method: "map",
            args: [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "mapEntries",
            method: "mapEntries",
            args: [([key, value]) => [key, `${value}!`]],
            returnType: "self"
        },
        {
            desc: "mapKeys",
            method: "mapKeys",
            args: [ii => `${ii}!`],
            returnType: "self"
        },
        {
            desc: "merge",
            method: "merge",
            args: [itemAlternative],
            returnType: "self"
        },
        // {
        //     desc: "mergeDeep",
        //     method: "mergeDeep",
        //     args: [itemAlternative]
        // },
        // {
        //     desc: "mergeDeepWith",
        //     method: "mergeDeepWith",
        //     args: [(oldVal, newVal) => oldVal / newVal, itemAlternative]
        // },
                // {
        //     desc: "mergeIn",
        //     method: "mergeIn",
        //     args: [['b', 'x'], itemAlternative]
        // },
        // {
        //     desc: "mergeDeepIn",
        //     method: "mergeDeepIn",
        //     args: [['b', 'x'], itemAlternative]
        // },
        {
            desc: "mergeWith",
            method: "mergeWith",
            args: [(oldVal, newVal) => oldVal / newVal, itemAlternative],
            returnType: "self"
        },
        {
            desc: "push",
            method: "push",
            args: [sampleValue],
            returnType: "self"
        },
        {
            desc: "pop",
            method: "pop",
            args: [],
            returnType: "self"
        },
        {
            desc: "reverse",
            method: "reverse",
            args: [],
            returnType: "self"
        },
        {
            desc: "rest",
            method: "rest",
            args: [],
            returnType: "self"
        },
        {
            desc: "set key",
            method: "set",
            args: [key, sampleValue],
            returnType: "self"
        },
        {
            desc: "set non-existing key",
            method: "set",
            args: [nonExistingKey, sampleValue],
            returnType: "self"
        },
        {
            desc: "setIn keyPath",
            method: "setIn",
            args: [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn partially non-existing keyPath",
            method: "setIn",
            args: [keyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn non-existing keyPath",
            method: "setIn",
            args: [nonExistingKeyPath, sampleValue],
            returnType: "self",
            deep: true
        },
        {
            desc: "setIn empty keyPath",
            method: "setIn",
            args: [emptyKeyPath, sampleValue],
            returnType: "wrapped",
            deep: true
        },
        {
            desc: "shift",
            method: "shift",
            args: [],
            returnType: "self"
        },
        {
            desc: "skip",
            method: "skip",
            args: [1],
            returnType: "self"
        },
        {
            desc: "skipLast",
            method: "skipLast",
            args: [1],
            returnType: "self"
        },
        {
            desc: "skipWhile (match existing value)",
            method: "skipWhile",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "skipUntil (match existing value)",
            method: "skipUntil",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "skipWhile (match nonExisting value)",
            method: "skipWhile",
            args: [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "skipUntil (match nonExisting value)",
            method: "skipUntil",
            args: [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "slice with no args",
            method: "slice",
            args: [],
            returnType: "self"
        },
        {
            desc: "slice with begin",
            method: "slice",
            args: [1],
            returnType: "self"
        },
        {
            desc: "slice with begin and end",
            method: "slice",
            args: [1, 2],
            returnType: "self"
        },
        {
            desc: "slice with negative begin",
            method: "slice",
            args: [-1],
            returnType: "self"
        },
        {
            desc: "slice with negative end",
            method: "slice",
            args: [0, -1],
            returnType: "self"
        },
        {
            desc: "return true if a key returns true",
            method: "some",
            args: [ii => ii === existingValue],
            returnType: "plain"
        },
        {
            desc: "return false only if no keys return true",
            method: "some",
            args: [ii => ii === nonExistingValue],
            returnType: "plain"
        },
        {
            desc: "sort",
            method: "sort",
            args: [],
            returnType: "self"
        },
        {
            desc: "sortBy",
            method: "sortBy",
            args: [ii => ii],
            returnType: "self"
        },
        {
            desc: "take",
            method: "take",
            args: [1],
            returnType: "self"
        },
        {
            desc: "takeLast",
            method: "takeLast",
            args: [1],
            returnType: "self"
        },
        {
            desc: "takeWhile (match existing value)",
            method: "takeWhile",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "takeUntil (match existing value)",
            method: "takeUntil",
            args: [ii => ii === existingValue],
            returnType: "self"
        },
        {
            desc: "takeWhile (match nonExisting value)",
            method: "takeWhile",
            args: [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "takeUntil (match nonExisting value)",
            method: "takeUntil",
            args: [ii => ii === nonExistingValue],
            returnType: "self"
        },
        {
            desc: "unshift",
            method: "unshift",
            args: [sampleValue],
            returnType: "self"
        },
        {
            desc: "update key",
            method: "update",
            args: [key, ii => ii + 100],
            returnType: "self"
        },
        {
            desc: "update non-existing key",
            method: "update",
            args: [nonExistingKey, sampleValue, ii => ii + 100],
            returnType: "self"
        },
        {
            desc: "updateIn keyPath",
            method: "updateIn",
            args: [keyPath, ii => ii + 100],
            returnType: "self",
            deep: true
        },
        {
            desc: "updateIn non-existing keyPath",
            method: "updateIn",
            args: [nonExistingKeyPath, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn non-existing keyPath with notSetValue",
            method: "updateIn",
            args: [nonExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn partially existing keyPath",
            method: "updateIn",
            args: [partiallyExistingKeyPath, sampleValue, ii => ii],
            returnType: "self",
            deep: true,
            shouldReturnSelf: true
        },
        {
            desc: "updateIn empty keyPath",
            method: "updateIn",
            args: [emptyKeyPath, ii => ii],
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
