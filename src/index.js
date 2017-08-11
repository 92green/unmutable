import {Map, List, Iterable} from 'immutable';
import isPlainObject from 'is-plain-object';
import listMethodNames from './listMethodNames';

class UnmutableWrapper {
    constructor(item, options = {}) {
        const {methodConstructors = {}} = options;

        // copy methods if applicable
        try {
            listMethodNames(item)
                .forEach(name => {
                    let method = item[name];
                    this[name] = (...args) => {
                        const result = method.bind(item)(...args);

                        const CustomConstructor = methodConstructors[name];
                        if(CustomConstructor) {
                            return CustomConstructor(result);
                        }
                        return Wrap(result);
                    };
                });
        } catch(e) {
        }

        this.__item = item;
    }

    done() {
        return this.__item;
    }
}

class UnmutableMapWrapper extends UnmutableWrapper {
    get size() {
        return this.__item.size;
    }
}

class UnmutableObjectWrapper extends UnmutableMapWrapper {
    constructor(item, options) {
        const obj = ii => new UnmutableObjectWrapper(ii);

        const methodConstructors = {
            set: obj,
            delete: obj,
            deleteAll: obj,
            clear: obj,
            update: obj,
            merge: obj,
            mergeWith: obj,
            concat: obj,
            map: obj,
            mapKeys: obj,
            mapEntries: obj,
            flatMap: obj,
            filter: obj,
            filterNot: obj,
            reverse: obj,
            sort: obj,
            sortBy: obj
        };

        super(Map(item), {methodConstructors}, options);

        // remove deep operations for now
        // rewrite them in future
        const remove = [
            'mergeDeep',
            'mergeDeepWith',
            'setIn',
            'deleteIn',
            'updateIn',
            'mergeIn',
            'mergeDeepIn'
        ];

        remove.forEach(name => {
            delete this[name];
        })
    }

    done() {
        return this.__item.toObject();
    }
}


export const Wrap = (item, options) => {
    if(isPlainObject(item)) {
        return new UnmutableObjectWrapper(item, options);
    }
    if(Map.isMap(item)) {
        return new UnmutableMapWrapper(item, options);
    }
    return new UnmutableWrapper(item, options);
};
