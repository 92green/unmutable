// @flow
import prep from './internal/prep';
import entries from './entries';

export default prep({
    name: 'forEach',
    immutable: 'forEach',
    all: (sideEffect: Function) => (value: Object): number => {
        let iterator = entries()(value);
        let i = 0;
        for(let [key, childValue] of iterator) {
            i++;
            if(sideEffect(childValue, key, value) === false) {
                return i;
            }
        }
        return i;
    }
});
