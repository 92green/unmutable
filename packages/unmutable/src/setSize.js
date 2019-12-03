// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'setSize',
    immutable: 'setSize',
    array: (size: number) => (value: Array<*>): * => {
        return [...Array(size)].map((_, index) => value[index]);
    },
    ap: true,
    of: true
});
