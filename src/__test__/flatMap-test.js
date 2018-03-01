// @flow
import flatMap from '../flatMap';
import set from '../set';
import push from '../push';
import compare from '../internal/compare';
import compareIteratee from '../internal/compareIteratee';

compare({
    name: `flatMap() on object should work`,
    item: {a:{b:12,c:34},d:{e:56,f:78}},
    fn: flatMap((value, key) => set('key', key)(value)),
    toJS: true
});

compareIteratee({
    name: `flatMap() on object should pass correct arguments to iteratee`,
    item: {a:{b:12,c:34},d:{e:56,f:78}},
    fn: (checkArgs) => flatMap((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return value;
    }),
    argsToJS: ['value','iter']
});

compare({
    name: `flatMap() on array should work`,
    item: [[1,2],[3,4]],
    fn: flatMap((value, key) => push(key)(value)),
    toJS: true
});

compareIteratee({
    name: `flatMap() on array should pass correct arguments to iteratee`,
    item: [[1,2],[3,4]],
    fn: (checkArgs) => flatMap((value: *, key: *, iter: *): boolean => {
        checkArgs({value, key, iter});
        return value;
    }),
    argsToJS: ['value','iter']
});
