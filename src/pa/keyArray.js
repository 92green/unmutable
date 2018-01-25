// @flow
import prep from '../internal/prep';

export default prep({
    name: () => (item) => item.keySeq().toArray(),
    obj: () => (item: Object): Array<string> => Object.keys(item),
    arr: () => (item: Array<*>): Array<number> => {
        let keys = [];
        for(let i = 0; i < item.length; i++) {
            keys.push(i);
        }
        return keys;
    }
});
