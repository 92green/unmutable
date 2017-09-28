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

                // special case for update() as it can requires different kinds of wrapping
                // depending on the arguments passed in
                if(name === "update") {
                    _this.update = (...args: *): UnmutableWrapper => {
                        console.log("doin an update", args)
                        const result = method.bind(obj)(...args);
                        if(typeof args[1] === "undefined") {
                            console.log("returnin a ", result);
                            return 123; //methodConstructors.updateSelf(result);
                        }
                        return constructor(result);
                    };
                    return;
                }

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
