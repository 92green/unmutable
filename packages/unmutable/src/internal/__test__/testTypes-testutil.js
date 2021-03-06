// @flow
import { Map, List, Record, Set, Seq, OrderedMap, OrderedSet, Stack } from 'immutable';
import UnmutableCompatible from './UnmutableCompatible-testutil';

import {
    Map as Map3,
    List as List3,
    Record as Record3,
    Set as Set3,
    Seq as Seq3,
    OrderedMap as OrderedMap3,
    OrderedSet as OrderedSet3,
    Stack as Stack3
} from 'immutable3';

type TestTypesConfig = {
    name: string,
    fn: Function,
    expectedResult: *
};

const ABRecord = Record({a: 1, b: 2});
class ABRecordExtended extends ABRecord {}

const ABRecord3 = Record3({a: 1, b: 2});
class ABRecordExtended3 extends ABRecord3 {}

class A {}

export const typeFactory = () => ({
    undefined: undefined,
    null: null,
    string: "string",
    number: 123,
    object: {object: true},
    array: ["array"],
    map: Map(),
    orderedMap: OrderedMap(),
    list: List(),
    record: new ABRecord({b: 3}),
    recordExtended: new ABRecordExtended({b: 3}),
    set: Set(),
    orderedSet: OrderedSet(),
    seq: Seq(),
    stack: Stack(),
    map3: Map3(),
    orderedMap3: OrderedMap3(),
    list3: List3(),
    record3: new ABRecord3({b: 3}),
    recordExtended3: new ABRecordExtended3({b: 3}),
    set3: Set3(),
    orderedSet3: OrderedSet3(),
    seq3: Seq3(),
    stack3: Stack3(),
    function: () => {},
    classInstance: new A(),
    unmutableCompatible: new UnmutableCompatible()
});



export default ({name, fn, expectedResult}: TestTypesConfig) => {

    let types = typeFactory();
    // $HackityHacks: call function type to get 100% coverage
    types.function();

    const result = Object.keys(types).reduce((obj, key) => ({
        ...obj,
        [key]: fn(types[key])
    }), {});

    test(name, () => {
        expect(result).toEqual(expectedResult);
    });
};
