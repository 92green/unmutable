// @flow
import {Map, List} from 'immutable';
import IsUnmutable from '../IsUnmutable';

export default function(test: Function, Wrap: Function) {
    test('is unmutable should return true for unmutable stuff', (tt: *) => {
        tt.false(IsUnmutable(undefined), "undefined should be false");
        tt.false(IsUnmutable(null), "Null should be false");
        tt.false(IsUnmutable({}), "Plain object should be false");
        tt.false(IsUnmutable([]), "Arrays should be false");
        tt.false(IsUnmutable(Map()), "Maps should be false");
        tt.false(IsUnmutable(List()), "Lists should be false");
        tt.false(IsUnmutable(1), "number should be false");
        tt.false(IsUnmutable("A"), "string should be false");
        tt.false(IsUnmutable(() => {}), "Function should be false");

        tt.true(IsUnmutable(Wrap(undefined)), "undefined should be true");
        tt.true(IsUnmutable(Wrap(null)), "Null should be true");
        tt.true(IsUnmutable(Wrap({})), "Plain object should be true");
        tt.true(IsUnmutable(Wrap([])), "Arrays should be true");
        tt.true(IsUnmutable(Wrap(Map())), "Maps should be true");
        tt.true(IsUnmutable(Wrap(List())), "Lists should be true");
        tt.true(IsUnmutable(Wrap(1)), "number should be true");
        tt.true(IsUnmutable(Wrap("A")), "string should be true");
        tt.true(IsUnmutable(Wrap(() => {})), "Function should be true");
    });
}
