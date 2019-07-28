// @flow
import prep from './internal/unmutable';
import mergeWith from './mergeWith';
import toArray from './toArray';
import isIndexed from './util/isIndexed';
import isValueObject from './util/isValueObject';
import pipeWith from './util/pipeWith';

let mergeDeepWith = (merger: Function, ...newValues: Array<*>) => mergeWith(
    (oldVal: *, newVal: *, key: *) => {
        if(isIndexed(oldVal)) {
            return pipeWith(
                newVal,
                toArray(),
                newVal => [...oldVal, ...newVal]
            );
        }
        if(isValueObject(oldVal)) {
            return mergeDeepWith(merger, newVal)(oldVal);
        }
        return merger(oldVal, newVal, key);
    },
    ...newValues
);

export default prep({
    n: 'mergeDeepWith',
    i: 'mergeDeepWith',
    o: mergeDeepWith
});
