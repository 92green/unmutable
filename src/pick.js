// @flow
import prep from './internal/prep';
import filter from './filter';

export default prep({
    name: 'pick',
    all: (keys: string[]) => filter((value, key) => keys.includes(key))
});
