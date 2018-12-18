// @flow
import prep from './internal/unmutable';
import fastDeepEqual from 'fast-deep-equal';

export default prep({
    name: 'equals',
    immutable: 'equals',
    all: (other: *) => (item: *): boolean => fastDeepEqual(item, other)
});
