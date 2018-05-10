// @flow
import prep from './internal/prep';
import toArray from './toArray';

export default prep({
    name: 'join',
    immutable: 'join',
    all: (separator: string = ",") => (value: *): string => {
        return toArray()(value).join(separator);
    }
});
