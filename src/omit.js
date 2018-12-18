// @flow
import prep from './internal/unmutable';
import filter from './filter';

export default prep({
    name: 'omit',
    all: (keys: string[]) => filter((value, key) => !keys.includes(key))
});
