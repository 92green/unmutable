// @flow
import prep from './internal/prep';

export default prep({
    all: (predicate: Function, ifTrue: Function, ifFalse: Function = ii => ii) => (item: *): * => {
        return (predicate(item) ? ifTrue : ifFalse)(item);
    }
});
