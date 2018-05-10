// @flow
import prep from './internal/prep';
import get from './get';
import keyArray from './keyArray';

export default prep({
    name: 'entriesReverse',
    // $FlowFixMe - using * as flow cannot recognise Symbol.iterator as being @@iterator (see https://github.com/facebook/flow/issues/1163)
    all: () => (value: *): * => {
        const keys = keyArray()(value);
        let counter = keys.length - 1;
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => keys.hasOwnProperty(counter)
                ? ({
                    value: [
                        keys[counter],
                        get(keys[counter--])(value)
                    ],
                    done: false
                })
                : ({
                    done: true
                })
        };
    }
});
