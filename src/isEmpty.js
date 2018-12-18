// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    name: 'isEmpty',
    immutable: 'isEmpty',
    record: () => (value: *): boolean => value.equals(new value.constructor()),
    all: () => (value: *): boolean => entries()(value).next().done
});
