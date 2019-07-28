// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'isEmpty',
    i: 'isEmpty',
    r: () => (value: *): boolean => value.equals(new value.constructor()),
    _: () => (value: *): boolean => entries()(value).next().done
});
