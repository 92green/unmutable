// @flow
import prep from './internal/prep';
import isEmpty from './isEmpty';

export default prep({
    name: 'isNotEmpty',
    all: () => (item: *) => !isEmpty()(item)
});
