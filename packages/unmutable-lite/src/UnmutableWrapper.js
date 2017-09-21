// @flow
import {ListMethodNames} from 'unmutable-core';
import Wrap from './Wrap';

export default class UnmutableWrapper {

    __item: *;

    constructor(item: *) {
        this.__item = item;
    }

    _addMethods(obj: *, methodConstructors: ?Object = null) {
        var _this = (this: any);

        // copy methods if applicable
        ListMethodNames(obj)
            .forEach((name: string) => {
                const constructor = methodConstructors
                    ? methodConstructors[name]
                    : Wrap;

                if(!constructor) {
                    return;
                }

                let method = obj[name];
                _this[name] = (...args: *): UnmutableWrapper => {
                    const result = method.bind(obj)(...args);
                    return constructor(result);
                };
            });
    }

    get value(): * {
        return this.__item;
    }

    isCollection(): boolean {
        return false;
    }

    isKeyed(): boolean {
        return false;
    }

    isIndexed(): boolean {
        return false;
    }

    wrapperType(): string {
        return "UnmutableWrapper";
    }
}
