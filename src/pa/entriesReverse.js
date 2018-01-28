// @flow
import prep from '../internal/prep';
import get from './get';
import keyArray from './keyArray';

export default prep({
    all: () => (item: *): Iterator<*> => {
        const keys = keyArray()(item);
        let counter = keys.length - 1;
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => ({
                value: [
                    keys[counter],
                    get(keys[counter])(item)
                ],
                done: !keys.hasOwnProperty(counter--)
            })
        };
    }
});
