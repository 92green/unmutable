// @flow
import prep from './internal/prep';
import concat from './concat';
import slice from './slice';

export default prep({
    name: "cycle",
    all: (shift: number): * => (value: *) => {
        let first = slice(0, shift)(value);
        let last = slice(shift)(value);
        return concat(first)(last);
    }
});
