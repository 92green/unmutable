// @flow
import prep from './internal/prep';

export default prep({
    name: "keys",
    immutable: "keys",
    record: () => (value: *) => value.toSeq().keys(),
    // $FlowFixMe - flow cannot recognise Symbol.iterator (see https://github.com/facebook/flow/issues/1163)
    object: () => (value: Object): * => {
        let counter = 0;
        const keys = Object.keys(value);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => keys.hasOwnProperty(counter)
                ? ({
                    value: keys[counter++],
                    done: false
                })
                : ({
                    done: true
                })
        };
    },
    array: () => (value: Array<*>): * => value.keys()
});
