// @flow
import prep from './internal/prep';
import set from './set';

export default prep({
    name: 'updateInto',
    all: (key: string|number, updater: Function) => (value: *): * => set(key, updater(value))(value)
});
