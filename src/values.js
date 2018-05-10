// @flow
import prep from './internal/prep';

export default prep({
    name: "values",
    immutable: "values",
    record: () => (value) => value.toSeq().values(),
    // $FlowFixMe - using * as flow cannot recognise Symbol.iterator as being @@iterator (see https://github.com/facebook/flow/issues/1163)
    object: () => (value: Object): * => {
        let counter = 0;
        const keys = Object.keys(value);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => keys.hasOwnProperty(counter)
                ? ({
                    value: value[keys[counter++]],
                    done: false
                })
                : ({
                    done: true
                })
        };
    },
    // $FlowFixMe - flow can't deal with computed properties
    array: () => (value: Array<*>): * => value[Symbol.iterator]()
});
