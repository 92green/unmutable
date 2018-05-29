// @flow
import prep from './internal/prep';

export default prep({
    name: 'reverse',
    immutable: 'reverse',
    array: () => (item: Array<*>): Array<*> => [...item].reverse()
});
