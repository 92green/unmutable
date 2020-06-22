// @flow
import prep from './internal/unmutable';
import forEach from './forEach';
import pipeWith from './pipeWith';
import map from './map';
import concat from './concat';
import filter from './filter';

const ID_NO_MATCH = Symbol('ID_NO_MATCH');

export default prep({
    name: 'sortLike',
    all: (like: any, idMapper: Function, unmatchedIds: boolean = false, unmatchedItems: boolean = false) => (value: *): * => {
        let valueById = new Map();
        forEach(item => {
            valueById.set(idMapper(item), item);
        })(value);

        let matchedItems = pipeWith(
            like,
            map(id => valueById.has(id) ? valueById.get(id) : ID_NO_MATCH),
            unmatchedIds
                ? map(item => item === ID_NO_MATCH ? undefined : item)
                : filter(item => item !== ID_NO_MATCH)
        );

        if(!unmatchedItems) return matchedItems;

        let likeById = new Map();
        forEach(id => {
            likeById.set(id, true);
        })(like);

        return concat(filter(item => !likeById.get(idMapper(item)))(value))(matchedItems);
    }
});
