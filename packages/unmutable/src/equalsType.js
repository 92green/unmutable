// @flow
import prep from './internal/unmutable';
import isObject from './isObject';

export default prep({
    name: 'equalsType',
    all: (other: *) => (value: *): boolean => {
        if(typeof value !== typeof other) {
            return false;
        }

        let valueIsNull = value === null;
        let otherIsNull = other === null;
        if(valueIsNull || otherIsNull) {
            return otherIsNull === valueIsNull;
        }

        if(isObject(value) && isObject(other)) {
            return value.constructor === other.constructor;
        }

        return true;
    }
});
