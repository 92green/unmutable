// @flow
import prep from './internal/prep';
import get from './get';
import has from './has';
import isValueObject from './util/isValueObject';

// we're not using Immutable.js hasIn because it can't cope with mixed types in the keyPath

export default prep({
    name: 'hasIn',
    all: (keyPath: string[]) => (value: *): boolean => {
        let ii = value;
        for(let key of keyPath) {
            if(!isValueObject(ii) || !has(key)(ii)) {
                return false;
            }
            ii = get(key)(ii);
        }
        return true;
    }
});
