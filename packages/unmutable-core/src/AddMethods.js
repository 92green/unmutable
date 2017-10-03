// @flow
import ListMethodNames from './ListMethodNames';
import CompositeMethods from './CompositeMethods';
import Unwrap from './Unwrap';
const {deleteIn, getIn, hasIn, setIn, updateIn} = CompositeMethods;

const iterate = (method: Function, Wrap: Function, self: Object): Function => (iterate: Function): Function => {
    return method(
        (value, key) => Unwrap(
            iterate(Wrap(value), key, self)
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
        fn: (method: Function, Wrap: Function, self: Object): Function => (keyPath: Array<*>): Function => {
            return deleteIn(self, Wrap)(keyPath);
        },
        returnType: (...args) => args[0].length === 0 ? "wrapped" : "self"
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
        fn: (method: Function, Wrap: Function, self: Object): Function => (keyPath: Array<*>, notSetValue: * = undefined): Function => {
            return getIn(self, Wrap)(keyPath, notSetValue);
        },
        returnType: "wrapped"
    },
    has: {
        returnType: "plain"
    },
    hasIn: {
        fn: (method: Function, Wrap: Function, self: Object): Function => (keyPath: Array<*>): Function => {
            return hasIn(self, Wrap)(keyPath);
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
        fn: (method: Function, Wrap: Function, self: Object): Function => (iterate: Function, initialReduction: *): Function => {
            return method(
                (reduction, value, key) => Unwrap(
                    iterate(reduction, Wrap(value), key, self)
                ),
                initialReduction
            );
        },
        returnType: "wrapped"
    },
    reduceRight: {
        fn: (method: Function, Wrap: Function, self: Object): Function => (iterate: Function, initialReduction: *): Function => {
            return method(
                (reduction, value, key) => Unwrap(
                    iterate(reduction, Wrap(value), key, self)
                ),
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
        returnType: "self"
    },
    setIn: {
        fn: (method: Function, Wrap: Function, self: Object): Function => (...args: *): Function => {
            let arities = [
                (keyPath: Array<string>, value: *): * => {
                    return setIn(self, Wrap)(keyPath, value);
                },
                (keyPath: Array<string>, notSetValue: *, value: *): * => {
                    return setIn(self, Wrap)(keyPath, notSetValue, value);
                }
            ];
            return arities[args.length - 2](...args);
        },
        returnType: "self"
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
        fn: (method: Function, Wrap: Function, self: Object): Function => (...args: *): Function => {
            let arities = [
                (updater: Function): * => {
                    return Wrap(updater(self));
                },
                (key: string, updater: Function): * => {
                    return method(
                        key,
                        (value) => Unwrap(updater(Wrap(value)))
                    );
                },
                (key: string, notSetValue: *, updater: Function): * => {
                    return method(
                        key,
                        notSetValue,
                        (value) => Unwrap(updater(Wrap(value)))
                    );
                }
            ];
            return arities[args.length - 1](...args);
        },
        returnType: (...args) => args.length === 1 ? "wrapped" : "self"
    },
    updateIn: {
        fn: (method: Function, Wrap: Function, self: Object): Function => (...args: *): Function => {
            let arities = [
                (keyPath: Array<string>, updater: Function): * => {


        // _this.deleteIn = deleteIn(_this, Wrap);
        // _this.hasIn = hasIn(_this, Wrap);
        // _this.getIn = getIn(_this, Wrap);
        // _this.setIn = setIn(_this, Wrap);
        // _this.updateIn = updateIn(_this, Wrap);


                    return method(
                        keyPath,
                        (value) => Unwrap(updater(Wrap(value)))
                    );
                },
                (keyPath: Array<string>, notSetValue: *, updater: Function): * => {
                    return method(
                        keyPath,
                        notSetValue,
                        (value) => Unwrap(updater(Wrap(value)))
                    );
                }
            ];
            return arities[args.length - 2](...args);
        },
        returnType: (...args) => args[0].length === 0 ? "wrapped" : "self"
    }
};

export default function AddMethods(self: Object, methodsFrom: Object, Wrap: Function, selfTransform: Function = (ii) => ii) {
    ListMethodNames(methodsFrom)
        .forEach((name: string) => {
            if(!methods[name]) {
                return;
            }

            let {returnType} = methods[name];

            let method = methodsFrom[name].bind(methodsFrom);
            if(methods[name].fn) {
                method = methods[name].fn(method, Wrap, self);
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
                    result = selfTransform(result);
                }
                return Wrap(result);
            };
        });
}
