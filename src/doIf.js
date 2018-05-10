// @flow
import prep from './internal/prep';

export default prep({
    name: 'doIf',
    all: (predicate: Function, ifTrue: Function, ifFalse: Function = ii => ii) => (value: *): * => {
        return (predicate(value) ? ifTrue : ifFalse)(value);
    }
});
