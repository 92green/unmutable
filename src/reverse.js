// @flow
import prep from './internal/prep';

export default prep({
    immutable: 'reverse',
    array: () => (item: Array<*>): Array<*> => item.reverse()
});
