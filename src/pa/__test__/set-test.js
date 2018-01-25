// @flow
import set from '../set';
import compare from '../../internal/compare';

compare({
    name: `set() object sets a new value`,
    item: {a:1, b:2},
    fn: set('c', 123),
    toJS: true
});

compare({
    name: `set() object sets an existing value`,
    item: {a:1, b:2},
    fn: set('a', 123),
    toJS: true
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
    name: `set() array sets a negative value`,
    item: [1,2,3],
    fn: set(-2, 123),
    toJS: true
});
