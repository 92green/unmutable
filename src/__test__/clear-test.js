// @flow
import test from 'ava';
import clear from '../clear';
import compare from '../internal/comp';

compare({
    name: `clear() works on objects`,
    item: {a:1, b:2},
    fn: clear(),
    toJS: true
});

compare({
    name: `clear() works on arrays`,
    item: [1,2,3],
    fn: clear(),
    toJS: true
});
