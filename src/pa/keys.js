// @flow
import prep from '../internal/prep';

export default prep({
    immutable: "keys",
    record: () => (item: *) => item.toSeq().keys(),
    object: () => (item: Object): Iterator<*> => {
        let counter = 0;
        const keys = Object.keys(item);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => ({
                value: keys[counter],
                done: !keys.hasOwnProperty(counter++)
            })
        };
    },
    array: () => (item: Array<*>): Iterator<*> => item.keys(),
});
