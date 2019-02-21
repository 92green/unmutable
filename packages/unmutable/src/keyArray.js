// @flow
import prep from './internal/unmutable';
import keys from './keys';

export default prep({
    name: 'keyArray',
    all: () => (value: Array<*>): Array<*> => [...keys()(value)]
});
