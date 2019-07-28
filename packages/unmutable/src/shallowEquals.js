// @flow
import prep from './internal/unmutable';
import every from './every';
import get from './get';
import size from './size';

export default prep({
    n: 'shallowEquals',
    _: (other: *) => (value: *): boolean => {
        return size()(value) === size()(other)
            ? every((childValue: *, key: *) => childValue === get(key)(other))(value)
            : false;
    }
});
