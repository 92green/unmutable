// @flow
import prep from './internal/unmutable';
import groupBy from './groupBy';
import reduce from './reduce';
import toArray from './toArray';
import pipeWith from './util/pipeWith';

export default prep({
    n: 'chunkBy',
    _: (predicate: Function): * => (value: *): *[] => {
        let chunkNumber: number = 0;

        let chunks: *[] = reduce((chunks, childValue, key) => {
            if(predicate(childValue, key, value)) {
                chunkNumber++;
            }
            chunks.push(chunkNumber);
            return chunks;
        }, [])(value);

        return pipeWith(
            value,
            groupBy(() => chunks.shift()),
            toArray()
        );
    }
});
