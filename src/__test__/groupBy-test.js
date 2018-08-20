// @flow
import { fromJS, Record } from 'immutable';
import groupBy from '../groupBy';
import get from '../get';
import compare from '../internal/__test__/compare-testutil';
import compareIteratee from '../internal/__test__/compareIteratee-testutil';

compare({
    name: `groupBy() on object should work`,
    item: {a: {type: "foo", value: 1}, b: {type: "bar", value: 2}, c: {type: "foo", value: 3}},
    fn: groupBy(get('type')),
    toJS: true
});

compareIteratee({
    name: `groupBy() on object should pass correct arguments to iteratee`,
    item: {a: {type: "foo", value: 1}, b: {type: "bar", value: 2}, c: {type: "foo", value: 3}},
    fn: (checkArgs) => groupBy((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return get('type')(value);
    }),
    argsToJS: ['value','iter']
});

compare({
    name: `groupBy() on array should work`,
    item: [{type: "foo", value: 1}, {type: "bar", value: 2}, {type: "foo", value: 3}],
    fn: groupBy(get('type')),
    toJS: true
});

compareIteratee({
    name: `groupBy() on array should pass correct arguments to iteratee`,
    item: [{type: "foo", value: 1}, {type: "bar", value: 2}, {type: "foo", value: 3}],
    fn: (checkArgs) => groupBy((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return get('type')(value);
    }),
    argsToJS: ['value', 'iter']
});
