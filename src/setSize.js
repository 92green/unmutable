// @flow
import prep from './internal/prep';

export default prep({
    name: 'setSize',
    immutable: 'setSize',
    array: (size: number) => (value: Array<*>): * => {
        return [...Array(size)].map((_, index) => value[index]);
    }
});
