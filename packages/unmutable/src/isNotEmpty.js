// @flow
import prep from './internal/unmutable';
import isEmpty from './isEmpty';

export default prep({
    n: 'isNotEmpty',
    _: () => (item: *) => !isEmpty()(item)
});
