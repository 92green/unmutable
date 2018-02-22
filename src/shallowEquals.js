// @flow
import prep from './internal/prep';
import every from './every';
import get from './get';
import size from './size';

export default prep({
    all: (other: *) => (item: *): boolean => {
        return size()(item) === size()(other)
            ? every((value: *, key: *) => value === get(key)(other))(item)
            : false;
    }
});
