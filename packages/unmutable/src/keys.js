// @flow
import prep from './internal/unmutable';
import entries from './entries';

export default prep({
    n: 'keys',
    i: 'keys',
    r: () => (value: *) => value.toSeq().keys(),
    a: () => (value: Array<*>): * => value.keys(),
    // $FlowFixMe - flow cannot recognise Symbol.iterator (see https://github.com/facebook/flow/issues/1163)
    _: () => (value: Object): * => {
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
                        value: entry.value[0]
                    };
            }
        };
    }
});
