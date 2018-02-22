// @flow
import prep from './internal/prep';
import toArray from './toArray';

export default prep({
    immutable: 'join',
    all: (separator: string = ",") => (item: *): string => {
        return toArray()(item).join(separator);
    }
});
