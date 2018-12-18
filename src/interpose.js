// @flow
import prep from './internal/unmutable';
import values from './values';

export default prep({
    name: 'interpose',
    immutable: 'interpose',
    array: (separator: *) => (value: Array<*>): Array<*> => {
        let iterator = values()(value);
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
