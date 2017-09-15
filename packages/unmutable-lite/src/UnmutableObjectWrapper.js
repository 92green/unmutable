// @flow
import UnmutableWrapper from './UnmutableWrapper';
import Wrap from './Wrap';
import {CreateMethodConstructors, CompositeMethods} from 'unmutable-core';
const {deleteIn, getIn, hasIn, setIn, update, updateIn} = CompositeMethods;

export default class UnmutableObjectWrapper extends UnmutableWrapper {
    constructor(item: Object) {
        super(item);

        // define shallow methods
        let _this = (this: any);
        _this.clear = (): Object => ({});
        _this.concat = (newItem: Object): Object => ({...item, ...newItem});
        _this.count = (): number => _this.size;
        _this.delete = (key: *): Object => {
            let clone = {...item};
            delete clone[key];
            return clone;
        };
        _this.get = (key: *, notFoundValue: * = undefined): * => _this.has(key) ? item[key] : notFoundValue;
        _this.has = (key: *): boolean => item.hasOwnProperty(key);
        _this.includes = (value: *): boolean => {
            for(let key in item) {
                if(item[key] === value) {
                    return true;
                }
            }
            return false;
        };
        _this.isEmpty = (): boolean => item.size === 0;
        _this.set = (key: *, value: *): Object => ({...item, [key]: value});

        // wrap shallow methods in constructors
        this._addMethods(
            this,
            CreateMethodConstructors(Wrap, ii => new UnmutableObjectWrapper(ii))
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
        return Object.keys(this.__item).length;
    }

    isCollection(): boolean {
        return true;
    }

    isKeyed(): boolean {
        return true;
    }

    done(): * {
        return this.__item;
    }

    wrapperType(): string {
        return "UnmutableObjectWrapper";
    }
}
