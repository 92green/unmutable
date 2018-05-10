// @flow
import prep from './internal/prep';

export default prep({
    name: 'entries',
    immutable: "entries",
    record: () => (value: *) => value.toSeq().entries(),
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
                    value: [
                        keys[counter],
                        value[keys[counter++]]
                    ],
                    done: false
                })
                : ({
                    done: true
                })
        };
    },
    array: () => (value: Array<*>): * => value.entries()
});
