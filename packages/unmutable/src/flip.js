// @flow
import prep from './internal/unmutable';
import mapEntries from './mapEntries';

export default prep({
    name: 'flip',
    immutable: 'flip',
    all: () => mapEntries(([key, childValue]) => [childValue, key])
});
