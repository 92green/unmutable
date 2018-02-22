// @flow
import prep from './internal/prep';
import values from './values';

export default prep({
    immutable: 'interpose',
    array: (separator: *) => (item: Array<*>): Array<*> => {
        let iterator = values()(item);
        let interposed = [];
        for(let value of iterator) {
            if(interposed.length) {
                interposed.push(separator);
            }
            interposed.push(value);
        }
        return interposed;
    }
});
