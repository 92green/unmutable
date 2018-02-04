// @flow
import prep from '../internal/prep';
import fastDeepEqual from 'fast-deep-equal';

export default prep({
    immutable: 'equals',
    all: (other: *) => (item: *): boolean => fastDeepEqual(item, other)
});
