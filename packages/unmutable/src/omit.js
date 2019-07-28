// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    n: 'omit',
    _: (keys: string[]) => filter((value, key) => !keys.includes(key))
});
