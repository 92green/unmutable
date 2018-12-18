// @flow
import {_isImmutableNoRecordChecks} from '../internal/immutableJsPredicates';
import {isRecord} from '../internal/immutableJsPredicates';
import {isUnmutableCompatible} from '../internal/unmutablePredicates';

import isObject from '../util/isObject';

const error = (name: string, value: *) => {
    throw new TypeError(`Unmutable ${name}() cannot be called with a value of ${value}`);
};

type PrepConfig = {
    name: string,
    unmutable?: string,
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

const UNMUTABLE_COMPATIBLE_TYPE: PrepType = {
    type: "unmutable",
    isType: (value: *): boolean => isUnmutableCompatible(value),
    fn: (name: string, ignore: *, all: Function) => (...args: Array<*>) => (value: *): * => {
        if(!value[name]) {
            if(all) {
                return all(...args)(value);
            }
            error(name, value);
        }
        return value[name](...args);
    }
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
    let types: PrepType[] = [
        UNMUTABLE_COMPATIBLE_TYPE,
        ...PREP_TYPES.filter(({type}) => config[type])
    ]
        .map(({type, isType, fn}) => ({
            type,
            isType,
            fn: fn(config.name, config[type], config.all)
        }));

    return (...args: *) => (value: *): * => {

        let throwTypeError = () => error(config.name, value);
        let type: ?PrepType = types.find(({isType}) => isType(value));

        if(type) {
            try {
                return type.fn(...args)(value);
            } catch(e) {
                if(e.message.startsWith('Unmutable')) {
                    throwTypeError();
                }
                throw e;
            }
        }
        throwTypeError();
    };
};
