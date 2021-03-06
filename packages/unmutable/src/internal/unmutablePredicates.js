// @flow

export const isUnmutableCompatible = (ii: any): boolean => {
    return !ii
        ? false
        : !!(ii[IS_UNMUTABLE_COMPATIBLE]);
};

export const IS_UNMUTABLE_COMPATIBLE = '__UNMUTABLE_COMPATIBLE__';
