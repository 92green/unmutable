// @flow
import prep from './internal/prep';

export default prep({
    immutable: "values",
    record: () => (item) => item.toSeq().values(),
    // $FlowFixMe - flow cannot recognise Symbol.iterator (apparently fixed in later version https://github.com/facebook/flow/issues/1163)
    object: () => (item: Object): Iterator<*> => {
        let counter = 0;
        const keys = Object.keys(item);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => keys.hasOwnProperty(counter)
                ? ({
                    value: item[keys[counter++]],
                    done: false
                })
                : ({
                    done: true
                })
        };
    },
    // $FlowFixMe - flow cannot recognise Symbol.iterator (apparently fixed in later version https://github.com/facebook/flow/issues/1163)
    array: () => (item: Array<*>): Iterator<*> => item[Symbol.iterator]()
});
