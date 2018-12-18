// @flow
import prep from './internal/unmutable';

export default prep({
    name: 'hashCode',
    immutable: 'hashCode',
    all: () => (value) => JSON.stringify(value)
});
