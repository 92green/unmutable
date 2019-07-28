// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'setSize',
    i: 'setSize',
    a: (size: number) => (value: Array<*>): * => {
        return [...Array(size)].map((_, index) => value[index]);
    }
});
