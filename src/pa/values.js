// @flow
import prep from '../internal/prep';

export default prep({
    immutable: "values",
    record: () => (item) => item.toSeq().values(),
    object: () => (item: Object): Iterator<*> => {
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
    array: () => (item: Array<*>): Iterator<*> => item[Symbol.iterator]()
});
