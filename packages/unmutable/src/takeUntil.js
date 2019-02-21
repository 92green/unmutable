// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    name: 'takeUntil',
    immutable: 'takeUntil',
    all: (predicate: Function) => (value: *): * => {
        let keeping = true;
        return filter((childValue: *, key: *, iter: *) => {
            if(keeping && predicate(childValue, key, iter)) {
                keeping = false;
            }
            return keeping;
        })(value);
    }
});
