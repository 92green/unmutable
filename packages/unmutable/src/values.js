// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    name: "values",
    immutable: "values",
    record: () => (value) => value.toSeq().values(),
    // $FlowFixMe - flow can't deal with computed properties
    array: () => (value: Array<*>): * => value[Symbol.iterator](),
    // $FlowFixMe - using * as flow cannot recognise Symbol.iterator as being @@iterator (see https://github.com/facebook/flow/issues/1163)
    all: () => (value: Object): * => {
        let entryIterator = entries()(value);
        return {
            [Symbol.iterator]: function(): Object {
                return this;
            },
            next: () => {
                let entry = entryIterator.next();
                return entry.done
                    ? entry
                    : {
                        done: false,
                        value: entry.value[1]
                    };
            }
        };
    }
});
