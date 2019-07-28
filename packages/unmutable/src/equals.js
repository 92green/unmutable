// @flow
import prep from './internal/unmutable';
import fastDeepEqual from 'fast-deep-equal';

export default prep({
    n: 'equals',
    i: 'equals',
    _: (other: *) => (item: *): boolean => fastDeepEqual(item, other)
});
