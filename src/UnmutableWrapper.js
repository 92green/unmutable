// @flow
import listMethodNames from './util/listMethodNames';
import Wrap from './Wrap';

export default class UnmutableWrapper {

    __item: *;

    constructor(item: *, options: Options) {
        const {methodConstructors = null} = options;

        var _this = (this: any);

        if(typeof item === "object") {
            // copy methods if applicable
            listMethodNames(item)
                .forEach((name: string) => {
                    const constructor = methodConstructors
                        ? methodConstructors[name]
                        : Wrap;

                    if(!constructor) {
                        return;
                    }

                    let method = item[name];
                    _this[name] = (...args: *): UnmutableWrapper => {
                        const result = method.bind(item)(...args);
                        return constructor(result);
                    };
                });
        }

        this.__item = item;
    }

    done(): * {
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
}
