// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    name: 'skipUntil',
    immutable: 'skipUntil',
    all: (predicate: Function) => (value: *): * => {
        let keeping = false;
        return filter((childValue: *, key: *, iter: *) => {
            if(!keeping && predicate(childValue, key, iter)) {
                keeping = true;
            }
            return keeping;
        })(value);
    }
});
