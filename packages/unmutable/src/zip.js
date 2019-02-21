// @flow
import prep from './internal/unmutable';
import get from './get';
import map from './map';
import pipeWith from './util/pipeWith';

const hasNext = (collections, index) => collections.every(ii => ii.length > index);

export default prep({
    name: 'zip',
    immutable: 'zip',
    array: (...collections: Array<*>) => (value: Array<*>): Array<*> => {
        collections = [value, ...collections];
        let zipped = [];
        for(let index = 0; hasNext(collections, index); index++) {
            pipeWith(
                collections,
                map(get(index)),
                ii => zipped.push(ii)
            );
        }
        return zipped;
    }
});
