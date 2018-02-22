// @flow
import prep from './internal/prep';
import keys from './keys';

export default prep({
    all: () => (item: Array<*>): Array<*> => [...keys()(item)]
});
