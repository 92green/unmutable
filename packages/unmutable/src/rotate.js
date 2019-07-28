// @flow
import prep from './internal/unmutable';
import concat from './concat';
import slice from './slice';

export default prep({
    n: 'rotate',
    _: (shift: number): * => (value: *) => {
        let first = slice(0, shift)(value);
        let last = slice(shift)(value);
        return concat(first)(last);
    }
});
