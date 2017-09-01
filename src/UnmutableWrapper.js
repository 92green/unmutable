// @flow
import listMethodNames from './util/listMethodNames';
import Wrap from './Wrap';

export default class UnmutableWrapper {

    __item: *;

    constructor(item: *, options: Options = {}) {
        const {methodConstructors = {}} = options;

        var _this = (this: any);

        if(typeof item === "object") {
            // copy methods if applicable
            listMethodNames(item)
                .forEach((name: string) => {
                    let method = item[name];
                    _this[name] = (...args: *): UnmutableWrapper => {
                        const result = method.bind(item)(...args);

                        const CustomConstructor = methodConstructors[name];
                        if(CustomConstructor) {
                            return CustomConstructor(result);
                        }
                        return Wrap(result);
                    };
                });
        }

        this.__item = item;
    }

    done(): * {
        return this.__item;
    }

    isKeyed(): boolean {
        return false;
    }

    isIndexed(): boolean {
        return false;
    }
}
