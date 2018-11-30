// @flow
import prep from './internal/prep';
import map from './map';

export default prep({
    name: "fork",
    all: (newValue: *) => (value: *) => map(fn => fn(value))(newValue)
});
