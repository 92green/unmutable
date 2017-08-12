import {Map} from 'immutable';
import isPlainObject from 'is-plain-object';

import UnmutableWrapper from './UnmutableWrapper';
import UnmutableMapWrapper from './UnmutableMapWrapper';
import UnmutableObjectWrapper from './UnmutableObjectWrapper';

export default function Wrap(item, options) {
    if(isPlainObject(item)) {
        return new UnmutableObjectWrapper(item, options);
    }
    if(Map.isMap(item)) {
        return new UnmutableMapWrapper(item, options);
    }
    return new UnmutableWrapper(item, options);
};
