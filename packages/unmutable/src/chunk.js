// @flow
import prep from './internal/unmutable';
import groupBy from './groupBy';
import toArray from './toArray';
import pipeWith from './util/pipeWith';

export default prep({
    name: "chunk",
    all: (size: number): * => (value: *): *[] => {
        let chunkNumber: number = -1;
        return pipeWith(
            value,
            groupBy(() => {
                chunkNumber++;
                return Math.floor(chunkNumber / size);
            }),
            toArray()
        );
    }
});
