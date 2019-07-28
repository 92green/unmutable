// @flow
import prep from './internal/unmutable';
import set from './set';

export default prep({
    n: 'updateInto',
    _: (key: string|number, updater: Function) => (value: *): * => set(key, updater(value))(value)
});
