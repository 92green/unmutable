// @flow
import prep from './internal/prep';
import reduce from './reduce';
import toArray from './toArray';
import pipe from './util/pipe';

export default prep({
    name: "keyBy",
    all: (keyer: Function) => pipe(
        toArray(),
        reduce((keyed: *, element: *): * => {
            keyed[keyer(element)] = element;
            return keyed;
        }, {})
    )
});
