// @flow
import prep from './internal/prep';
import isEmpty from './isEmpty';

export default prep({
    all: () => (item: *) => !isEmpty()(item)
});
