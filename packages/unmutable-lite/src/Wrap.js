// @flow
import {isMap, isList} from './ImmutablePredicates';
import {IsKeyed, IsUnmutable} from 'unmutable-core';

import UnmutableWrapper from './UnmutableWrapper';
import UnmutableMapWrapper from './UnmutableMapWrapper';
import UnmutableListWrapper from './UnmutableListWrapper';
import UnmutableObjectWrapper from './UnmutableObjectWrapper';
import UnmutableArrayWrapper from './UnmutableArrayWrapper';

export default function Wrap(item: *, options: Options = {}): UnmutableWrapperType {
    if(IsUnmutable(item)) {
        return item;
    }
    if(isMap(item)) {
        return new UnmutableMapWrapper(item, options);
    }
    if(isList(item)) {
        return new UnmutableListWrapper(item, options);
    }
    if(Array.isArray(item)) {
        return new UnmutableArrayWrapper(item, options);
    }
    if(IsKeyed(item)) {
        return new UnmutableObjectWrapper(item, options);
    }
    return new UnmutableWrapper(item, options);
}
