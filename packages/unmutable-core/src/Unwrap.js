// @flow
import IsUnmutable from './IsUnmutable';

export default function Unwrap(item: *): boolean {
    if(IsUnmutable(item)) {
        return item.value;
    }
    return item;
}
