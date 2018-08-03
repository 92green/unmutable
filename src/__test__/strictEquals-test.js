// @flow
import strictEquals from '../strictEquals';

test(`strictEquals() should check equality strictly`, () => {
    expect(strictEquals({a:1,b:[2,3]})({a:1,b:[2,3]})).toBe(false);

    let obj = {a:1,b:[2,3]};
    expect(strictEquals(obj)(obj)).toBe(true);
});
