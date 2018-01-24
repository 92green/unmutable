// @flow
import prep from './internal/prep';

export default prep({
    name: 'merge',
    obj: (newItem: Object) => (item): Object => ({...item, ...newItem})
});
