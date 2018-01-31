// @flow
import equals from '../equals';
import test from 'ava';

test(`equals() should do what it says on the tin when things are the same`, (tt: *) => {
    tt.true(equals({a:1,b:[2,3]})({a:1,b:[2,3]}));
});
test(`equals() should do what it says on the tin when things are not the same`, (tt: *) => {
    tt.false(equals({a:1,b:[2,3]})({a:1,b:[2,4]}));
});
