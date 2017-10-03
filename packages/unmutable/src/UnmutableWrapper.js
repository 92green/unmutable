// @flow
export default class UnmutableWrapper {

    __item: *;
    __isUnmutable: boolean;

    constructor(item: *) {
        this.__item = item;
        this.__isUnmutable = true;
    }

    get value(): * {
        return this.__item;
    }

    isCollection(): boolean {
        return false;
    }

    isKeyed(): boolean {
        return false;
    }

    isIndexed(): boolean {
        return false;
    }

    wrapperType(): string {
        return "UnmutableWrapper";
    }
}
