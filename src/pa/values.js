// @flow
import prep from '../internal/prep';

export default prep({
    name: "values",
    obj: () => (item: Object): Iterator<*> => {
        let counter = 0;
        const keys = Object.keys(item);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => ({
                value: item[keys[counter]],
                done: !keys.hasOwnProperty(counter++)
            })
        };
    },
    arr: () => (item: Array<*>): Iterator<*> => item[Symbol.iterator]()
});
