// @flow
import prep from './internal/unmutable';
import mergeWith from './mergeWith';
import toArray from './toArray';
import isIndexed from './util/isIndexed';
import isValueObject from './util/isValueObject';
import pipeWith from './util/pipeWith';

let mergeDeep = (...newValues: Array<*>) => mergeWith(
    (oldVal: *, newVal: *) => {
        if(isIndexed(oldVal)) {
            return pipeWith(
                newVal,
                toArray(),
                newVal => [...oldVal, ...newVal]
            );
        }
        if(isValueObject(oldVal)) {
            return mergeDeep(newVal)(oldVal);
        }
        return newVal;
    },
    ...newValues
);

export default prep({
    name: 'mergeDeep',
    immutable: 'mergeDeep',
    object: mergeDeep
});
