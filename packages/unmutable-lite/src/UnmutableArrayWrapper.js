// @flow
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {CreateMethodConstructors, CompositeMethods} from 'unmutable-core';
const {deleteIn, getIn, hasIn, setIn, update, updateIn} = CompositeMethods;

export default class UnmutableArrayWrapper extends UnmutableWrapper {

    constructor(item: Object) {
        super(item);

        // define shallow methods
        let _this = (this: any);
        _this.butLast = (): Array<*> => item.slice(0, -1);
        _this.clear = (): Array<*> => [];
        _this.concat = (newItem: Object): Array<*> => item.concat(newItem);
        _this.count = (): number => _this.size;
        _this.delete = (key: *): Array<*> => {
            let clone = [...item];
            clone.splice(key, 1);
            return clone;
        };
        _this.every = (condition: Function): * => item.every(condition);
        _this.first = (): * => item[0];
        _this.get = (key: *, notFoundValue: * = undefined): * => {
            if(!_this.has(key)) {
                return notFoundValue;
            }
            return key < 0 ? item[key + item.length] : item[key];
        };
        _this.has = (key: *): boolean => key < item.length && key >= -item.length;
        _this.includes = (value: *): boolean => item.indexOf(value) !== -1;
        _this.isEmpty = (): boolean => item.size === 0;
        _this.last = (): * => item[item.length - 1];
        _this.push = (value: *): Array<*> => [...item, value];
        _this.pop = (): Array<*> => item.slice(0, -1);
        _this.rest = (): Array<*> => item.slice(1);
        _this.reverse = (): Array<*> => [...item].reverse();
        _this.set = (key: *, value: *): Array<*> => {
            let clone = [...item];
            clone[key] = value;
            return clone;
        };
        _this.shift = (): Array<*> => item.slice(1);
        _this.skip = (amount: number): Array<*> => item.slice(amount);
        _this.skipLast = (amount: number): Array<*> => item.slice(0, -amount);
        _this.some = (condition: Function): * => item.some(condition);
        _this.take = (amount: number): Array<*> => item.slice(0, amount);
        _this.takeLast = (amount: number): Array<*> => item.slice(-amount);
        _this.unshift = (value: *): Array<*> => [value, ...item];

        // wrap shallow methods in constructors
        this._addMethods(
            this,
            CreateMethodConstructors(Wrap, ii => new UnmutableArrayWrapper(ii))
        );

        // define composite methods
        _this.deleteIn = deleteIn(_this, Wrap);
        _this.hasIn = hasIn(_this, Wrap);
        _this.getIn = getIn(_this, Wrap);
        _this.setIn = setIn(_this, Wrap);
        _this.update = update(_this, Wrap);
        _this.updateIn = updateIn(_this, Wrap);
    }

    get size(): number {
        return this.__item.length;
    }

    isCollection(): boolean {
        return true;
    }

    isIndexed(): boolean {
        return true;
    }

    done(): * {
        return (this: any).__item;
    }

    wrapperType(): string {
        return "UnmutableArrayWrapper";
    }
}
