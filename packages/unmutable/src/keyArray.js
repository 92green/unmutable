// @flow
import prep from './internal/unmutable';
import keys from './keys';

export default prep({
    n: 'keyArray',
    _: () => (value: Array<*>): Array<*> => [...keys()(value)]
});
