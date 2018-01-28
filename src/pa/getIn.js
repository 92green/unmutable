// @flow
import prep from '../internal/prep';
import get from './get';
import has from './has';
import isValueObject from '../util/isValueObject';

// we're not using Immutable.js getIn because it can't cope with mixed types in the keyPath

export default prep({
    all: (keyPath: string[], notFoundValue: * = undefined) => (item: *): * => {
        let ii = item;
        for(let key of keyPath) {
            if(!isValueObject(ii) || !has(key)(ii)) {
                return notFoundValue;
            }
            ii = get(key)(ii);
        }
        return ii;
    }
});
