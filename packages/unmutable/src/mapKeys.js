// @flow
import prep from './internal/unmutable';
import mapEntries from './mapEntries';

export default prep({
    name: 'mapKeys',
    immutable: 'mapKeys',
    all: (mapper: Function) => mapEntries(([key, childValue], index, value) => [
        mapper(key, childValue, value),
        childValue
    ])
});
