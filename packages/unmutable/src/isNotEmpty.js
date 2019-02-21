// @flow
import prep from './internal/unmutable';
import isEmpty from './isEmpty';

export default prep({
    name: 'isNotEmpty',
    all: () => (item: *) => !isEmpty()(item)
});
