// @flow
import prep from './internal/prep';

export default prep({
    name: 'reverse',
    arr: () => (item: Array<*>): Array<*> => item.reverse()
});
