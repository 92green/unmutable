// @flow
import {
    _isImmutableNoRecordChecks,
    isRecord
} from '../internal/predicates';

import isObject from '../util/isObject';

const error = (name: string, value: *) => {
    throw new Error(`${name}() cannot be called on ${value}`);
};

type PrepConfig = {
    name: string,
    record?: string|Function,
    immutable?: string|Function,
    array?: Function,
    object?: Function,
    all?: Function
};

type PrepType = {
    type: string,
    isType: (value: *) => boolean,
    fn: Function
};

const PREP_TYPES: Array<PrepType> = [
    {
        type: "record",
        isType: (value: *): boolean => isRecord(value),
        fn: (name: string, record: string|Function) => typeof record === 'string'
            ? (...args: Array<*>) => (value: *) => value[record](...args)
            : record
    },
    {
        type: "immutable",
        isType: (value: *): boolean => _isImmutableNoRecordChecks(value),
        fn: (name: string, immutable: string|Function) => typeof immutable === 'string'
            ? (...args: Array<*>) => (value: *): * => {
                if(!value[immutable]) {
                    error(name, value);
                }
                return value[immutable](...args);
            }
            : immutable
    },
    {
        type: "array",
        isType: (value: *): boolean => Array.isArray(value),
        fn: (name: string, array: Function) => array
    },
    {
        type: "object",
        isType: isObject,
        fn: (name: string, object: Function) => object

    },
    {
        type: "all",
        isType: (): boolean => true,
        fn: (name: string, all: Function) => all
    }
];

export default (config: PrepConfig): Function => {
    let types: PrepType[] = PREP_TYPES
        .filter(({type}) => config[type])
        .map(({type, isType, fn}) => ({
            type,
            isType,
            fn: fn(config.name, config[type])
        }));

    return (...args: *) => (value: *): * => {
        let type: ?PrepType = types.find(({isType}) => isType(value));
        if(type) {
            return type.fn(...args)(value);
        }
        error(config.name, value);
    };
};
