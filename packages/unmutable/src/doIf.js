// @flow
import prep from './internal/unmutable';

export default prep({
    n: 'doIf',
    _: (predicate: Function, ifTrue: Function, ifFalse: Function = ii => ii) => (value: *): * => {
        return (predicate(value) ? ifTrue : ifFalse)(value);
    }
});
