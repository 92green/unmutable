// @flow
import set from '../set';
import compare from '../internal/__test__/compare-testutil';
import {Record} from 'immutable';

compare({
    name: `set() object sets a new value`,
    item: {a:1, b:2},
    fn: set('c', 123),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `set() object sets an existing value`,
    item: {a:1, b:2},
    fn: set('a', 123),
    toJS: true,
    record: true,
    unmutableCompatible: true
});

compare({
    name: `set() array sets a new value`,
    item: [1,2,3],
    fn: set(6, 123),
    toJS: true
});

compare({
    name: `set() array sets an existing value`,
    item: [1,2,3],
    fn: set(2, 123),
    toJS: true
});

compare({
    name: `set() array sets an existing negative value`,
    item: [1,2,3],
    fn: set(-2, 123),
    toJS: true
});

compare({
    name: `set() array sets a new negative value`,
    item: [],
    fn: set(-1, 123),
    toJS: true
});

compare({
    name: `set() array sets a new negative value with existing values`,
    item: [1,2,3],
    fn: set(-5, 123),
    toJS: true
});

