// @flow
import equals from '../equals';

test(`equals() should do what it says on the tin when things are the same`, () => {
    expect(equals({a:1,b:[2,3]})({a:1,b:[2,3]})).toBe(true);
});
test(`equals() should do what it says on the tin when things are not the same`, () => {
    expect(equals({a:1,b:[2,3]})({a:1,b:[2,4]})).toBe(false);
});
