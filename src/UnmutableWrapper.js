import listMethodNames from './util/listMethodNames';
import Wrap from './Wrap';

export default class UnmutableWrapper {
    constructor(item, options = {}) {
        const {methodConstructors = {}} = options;

        if(typeof item === "object") {
            // copy methods if applicable
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
        }

        this.__item = item;
    }

    done() {
        return this.__item;
    }

    isKeyed() {
        return false;
    }

    isIndexed() {
        return false;
    }
}
