// @flow
import MethodReturnTypes from './MethodReturnTypes';

export default function(Wrap: Function, self: Function): Object {
    // define constructor types for values returned from methods
    let methodConstructorTypes: Object = {
        self,
        plain: ii => ii,
        wrapped: Wrap
    };

    // map these to their methods
    let methodConstructors: Object = {};
    for(let methodName in MethodReturnTypes) {
        methodConstructors[methodName] = methodConstructorTypes[
            MethodReturnTypes[methodName]
        ];
    }

    return methodConstructors;
}
