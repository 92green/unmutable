// @flow
import prep from './internal/prep';
import get from './get';
import map from './map';
import pipeWith from './util/pipeWith';

const hasNext = (collections, index) => collections.every(ii => ii.length > index);

export default prep({
    immutable: 'zip',
    array: (...collections: Array<*>) => (item: Array<*>): Array<*> => {
        collections = [item, ...collections];
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
