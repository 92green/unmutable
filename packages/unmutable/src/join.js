// @flow
import prep from './internal/unmutable';
import toArray from './toArray';

export default prep({
    n: 'join',
    i: 'join',
    _: (separator: string = ",") => (value: *): string => {
        return toArray()(value).join(separator);
    }
});
