// @flow
import {Map, List} from 'immutable';
import {IsPlainObject} from 'unmutable-core';

import UnmutableWrapper from './UnmutableWrapper';
import UnmutableMapWrapper from './UnmutableMapWrapper';
import UnmutableListWrapper from './UnmutableListWrapper';
import UnmutableObjectWrapper from './UnmutableObjectWrapper';
import UnmutableArrayWrapper from './UnmutableArrayWrapper';

export default function Wrap(item: *, options: Options = {}): UnmutableWrapperType {
    if(IsPlainObject(item)) {
        return new UnmutableObjectWrapper(item, options);
    }
    if(Array.isArray(item)) {
        return new UnmutableArrayWrapper(item, options);
    }
    if(Map.isMap(item)) {
        return new UnmutableMapWrapper(item, options);
    }
    if(List.isList(item)) {
        return new UnmutableListWrapper(item, options);
    }
    return new UnmutableWrapper(item, options);
}