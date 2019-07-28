// @flow
import prep from './internal/unmutable';
import reduce from './reduce';
import toArray from './toArray';
import pipe from './util/pipe';

export default prep({
    n: 'keyBy',
    _: (keyer: Function) => pipe(
        toArray(),
        reduce((keyed: *, element: *): * => {
            keyed[keyer(element)] = element;
            return keyed;
        }, {})
    )
});
