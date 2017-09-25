// @flow
import test from 'ava';
import IsKeyed from './IsKeyed';

test('is keyed should return true for keyed stuff', (tt: *) => {

    tt.true(IsKeyed({}), "Plain object should be true");
    tt.true(IsKeyed({foo: "bar"}), "Plain object with key should be true");
    tt.true(IsKeyed(new Object()), "New object should be true");
    tt.true(IsKeyed(Object.create({})), "Object.create should be true");
    tt.true(IsKeyed(Object.create(Object.prototype)), "Object.create should be true");
    tt.true(IsKeyed([]), "Arrays should be true (in reality we don't care about arrays)");

    let FakeClass  = class FakeClass {};
    tt.true(IsKeyed(new FakeClass()), "Class instances should be true");

    tt.false(IsKeyed(undefined), "undefined should be false");
    tt.false(IsKeyed(null), "null should be false");
    tt.false(IsKeyed(1), "number should be false");
    tt.false(IsKeyed("A"), "string should be false");
    tt.false(IsKeyed(() => {}), "Function should be false");

});
