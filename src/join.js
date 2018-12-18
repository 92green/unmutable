// @flow
import prep from './internal/unmutable';
import toArray from './toArray';

export default prep({
    name: 'join',
    immutable: 'join',
    all: (separator: string = ",") => (value: *): string => {
        return toArray()(value).join(separator);
    }
});
