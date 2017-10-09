// @flow
import ListMethodNames from './ListMethodNames';
import CompositeMethods from './CompositeMethods';
import KeyArray from './KeyArray';
import Unwrap from './Unwrap';
const {deleteIn, getIn, hasIn, setIn, updateIn} = CompositeMethods;

type FnParams = {
    method: Function,
    additionalMethods: Array<string>,
    methodsFrom: Object,
    wrap: Function,
    self: Object,
    fromWrapperData: Function,
    toWrapperData: Function
};

const iterate = ({method, wrap, self}: FnParams): Function => (iterate: Function): * => {
    return method(
        (value, key) => Unwrap(
            iterate(wrap(value), key, self)
        )
    );
};

const methods: Object = {
    butLast: {
        returnType: "self"
    },
    clear: {
        returnType: "self"
    },
    concat: {
        returnType: "self"
    },
    count: {
        returnType: "plain"
    },
    delete: {
        returnType: "self"
    },
    deleteIn: {
        fn: ({wrap, self}: FnParams): Function => (keyPath: Array<*>): * => {
            return deleteIn(self, wrap)(keyPath);
        },
        returnType: (...args) => args[0].length === 0 ? "wrapped" : "plain"
    },
    every: {
        fn: iterate,
        returnType: "plain"
    },
    filter: {
        fn: iterate,
        returnType: "self"
    },
    filterNot: {
        fn: iterate,
        returnType: "self"
    },
    first: {
        returnType: "wrapped"
    },
    flatMap: {
        returnType: "self"
    },
    get: {
        returnType: "wrapped"
    },
    getIn: {
        fn: ({wrap, self}: FnParams): Function => (keyPath: Array<*>, notSetValue: * = undefined): * => {
            return getIn(self, wrap)(keyPath, notSetValue);
        },
        returnType: "wrapped"
    },
    has: {
        returnType: "plain"
    },
    hasIn: {
        fn: ({wrap, self}: FnParams): Function => (keyPath: Array<*>): * => {
            return hasIn(self, wrap)(keyPath);
        },
        returnType: "plain"
    },
    includes: {
        returnType: "plain"
    },
    insert: {
        returnType: "self"
    },
    interleave: {
        returnType: "self"
    },
    interpose: {
        returnType: "self"
    },
    isEmpty: {
        returnType: "plain"
    },
    keyArray: {
        fn: ({self}: FnParams): Function => (): * => {
            return KeyArray(self);
        },
        returnType: "wrapped"
    },
    last: {
        returnType: "wrapped"
    },
    map: {
        fn: iterate,
        returnType: "self"
    },
    mapEntries: {
        returnType: "self"
    },
    mapKeys: {
        returnType: "self"
    },
    merge: {
        returnType: "self"
    },
    mergeWith: {
        returnType: "self"
    },
    pop: {
        returnType: "self"
    },
    push: {
        returnType: "self"
    },
    reduce: {
        fn: ({method, wrap, self}: FnParams): Function => (iterate: Function, initialReduction: *): * => {
            return method(
                (reduction, value, key) => iterate(reduction, wrap(value), key, self),
                initialReduction
            );
        },
        returnType: "wrapped"
    },
    reduceRight: {
        fn: ({method, wrap, self}: FnParams): Function => (iterate: Function, initialReduction: *): * => {
            return method(
                (reduction, value, key) => iterate(reduction, wrap(value), key, self),
                initialReduction
            );
        },
        returnType: "wrapped"
    },
    rest: {
        returnType: "self"
    },
    reverse: {
        returnType: "self"
    },
    set: {
        fn: ({method}: FnParams): Function => (key: string, value: *): * => {
            return method(key, Unwrap(value));
        },
        returnType: "self"
    },
    setIn: {
        fn: ({wrap, self, toWrapperData}: FnParams): Function => (keyPath: Array<string>, value: *): * => {
            return setIn(self, wrap)(keyPath, Unwrap(value), () => toWrapperData({}));
        },
        returnType: "plain"
    },
    shift: {
        returnType: "self"
    },
    skip: {
        returnType: "self"
    },
    skipLast: {
        returnType: "self"
    },
    skipUntil: {
        returnType: "self"
    },
    skipWhile: {
        returnType: "self"
    },
    slice: {
        returnType: "self"
    },
    some: {
        fn: iterate,
        returnType: "plain"
    },
    sort: {
        returnType: "self"
    },
    sortBy: {
        returnType: "self"
    },
    take: {
        returnType: "self"
    },
    takeLast: {
        returnType: "self"
    },
    takeUntil: {
        returnType: "self"
    },
    takeWhile: {
        returnType: "self"
    },
    unshift: {
        returnType: "self"
    },
    update: {
        fn: ({method, wrap, self}: FnParams): Function => (...args: *): * => {
            let arities = [
                (updater: Function): * => {
                    return wrap(updater(self));
                },
                (key: string, updater: Function): * => {
                    return method(
                        key,
                        (value) => Unwrap(updater(wrap(value)))
                    );
                },
                (key: string, notSetValue: *, updater: Function): * => {
                    return method(
                        key,
                        notSetValue,
                        (value) => Unwrap(updater(wrap(value)))
                    );
                }
            ];
            return arities[args.length - 1](...args);
        },
        returnType: (...args) => args.length === 1 ? "wrapped" : "self"
    },
    updateIn: {
        fn: ({self, wrap, toWrapperData}: FnParams): Function => (...args: *): * => {
            let arities = [
                (keyPath: Array<string>, updater: Function): * => {
                    return updateIn(self, wrap)(keyPath, undefined, (value) => Unwrap(updater(wrap(value))), () => toWrapperData({}));
                },
                (keyPath: Array<string>, notSetValue: *, updater: Function): * => {
                    return updateIn(self, wrap)(keyPath, notSetValue, (value) => Unwrap(updater(wrap(value))), () => toWrapperData({}));
                }
            ];
            return arities[args.length - 2](...args);
        },
        returnType: (...args) => args[0].length === 0 ? "wrapped" : "plain"
    }
};

export default function AddMethods(args: FnParams) {
    const {
        self,
        methodsFrom,
        additionalMethods = [],
        wrap,
        fromWrapperData = (ii) => ii,
        toWrapperData = (ii) => ii
    } = args;

    ListMethodNames(methodsFrom)
        .concat(additionalMethods)
        .forEach((name: string) => {
            if(!methods[name]) {
                return;
            }

            let {returnType} = methods[name];

            let method;
            if(typeof methodsFrom[name] == "function") {
                method = methodsFrom[name].bind(methodsFrom);
            }

            if(methods[name].fn) {
                method = methods[name].fn({
                    method,
                    wrap,
                    self,
                    fromWrapperData,
                    toWrapperData
                });
            }

            self[name] = (...args: *): UnmutableWrapper => {
                let result = method(...args);

                if(typeof returnType === "function") {
                    returnType = returnType(...args);
                }
                if(returnType === "plain") {
                    return result;
                }
                if(returnType === "self") {
                    result = fromWrapperData(result);
                }
                return wrap(result);
            };
        });
}
