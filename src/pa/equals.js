// @flow
import prep from '../internal/prep';
import fastDeepEqual from 'fast-deep-equal';

export default prep({
    name: 'equals',
    all: (other: *) => (item: *): boolean => fastDeepEqual(item, other)
});
