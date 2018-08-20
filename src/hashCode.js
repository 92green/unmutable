// @flow
import prep from './internal/prep';

export default prep({
    name: 'hashCode',
    immutable: 'hashCode',
    all: () => (value) => JSON.stringify(value)
});
