import {Map, List, Iterable} from 'immutable';
import isPlainObject from 'is-plain-object';
import listMethodNames from './listMethodNames';

class UnmutableWrapper {
    constructor(item) {
        // copy methods if applicable
        try {
            listMethodNames(item).forEach(name => {
                let method = item[name];
                this[name] = (...args) => {
                    return from(method.bind(item)(...args));
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
    constructor(item) {
        super(Map(item));

        // methods that should return an object
        const backToObject = [
            'set',
            'delete',
            'deleteAll',
            'clear',
            'update',
            'merge',
            'mergeWith',
            'concat',
            'map',
            'mapKeys',
            'mapEntries',
            'flatMap',
            'filter',
            'filterNot',
            'reverse',
            'sort',
            'sortBy'
        ];

        backToObject.forEach(name => {
            let method = this[name];
            this[name] = (...args) => method(...args).done();
        })

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
}


export const from = (item) => {
    if(isPlainObject(item)) {
        return new UnmutableObjectWrapper(item);
    }
    if(Map.isMap(item)) {
        return new UnmutableMapWrapper(item);
    }
    return new UnmutableWrapper(item)
};
