// @flow
import { fromJS } from 'immutable';

type CompareIterateeConfig = {
    item: *, // the input item to test, in plain javascript.
    name: string, // the name of the test
    fn: Function, // a function that accepts checkArgs() as an argument, and calls the functions to test. Your test function should then call checkArgs(), passing it an object of arguments to compare.
    argsToJS?: string[] // an array of strings of the strings that will need to be turned from Immutable.js back into plain javascript for comparison
};

export default ({item, name, fn, argsToJS = []}: CompareIterateeConfig) => {
    let testWith = (item: *, plainify: ?boolean = false): Array<*> => {
        let argsArray = [];
        let checkArgs = (args: Object) => {
            argsArray.push(
                Object
                    .keys(args)
                    .reduce((obj: Object, key: string): Object => {
                        let value = plainify && argsToJS.includes(key)
                            ? args[key].toJS()
                            : args[key];

                        return {
                            ...obj,
                            [key]: value
                        };
                    }, {})
            );
        };

        fn(checkArgs)(item);
        return argsArray;
    };

    test(name, () => {
        expect(testWith(fromJS(item), true)).toEqual(testWith(item));
    });
};
