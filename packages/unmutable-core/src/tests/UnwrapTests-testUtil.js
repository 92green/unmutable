// @flow
import {Map, List} from 'immutable';
import Unwrap from '../Unwrap';

export default function(test: Function, Wrap: Function) {
    test('Unwrap should unwrap unmutable things, and pass through everythign else', (tt: *) => {
        tt.is(Unwrap(undefined), undefined, "undefined should be passed through");
        tt.is(Unwrap(null), null, "Null should be passed through");
        tt.deepEqual(Unwrap({}), {}, "Plain object should be passed through");
        tt.deepEqual(Unwrap([]), [], "Arrays should be passed through");
        tt.is(Unwrap(Map()), Map(), "Maps should be passed through");
        tt.is(Unwrap(List()), List(), "Lists should be passed through");
        tt.is(Unwrap(1), 1, "number should be passed through");
        tt.is(Unwrap("A"), "A", "string should be passed through");

        let fn = () => {};
        tt.is(Unwrap(fn), fn, "Function should be passed through");

        tt.is(Unwrap(Wrap(undefined)), undefined, "undefined should be unwrapped");
        tt.is(Unwrap(Wrap(null)), null, "Null should be unwrapped");
        tt.deepEqual(Unwrap(Wrap({})), {}, "Plain object should be unwrapped");
        tt.deepEqual(Unwrap(Wrap([])), [], "Arrays should be unwrapped");
        tt.is(Unwrap(Wrap(Map())), Map(), "Maps should be unwrapped");
        tt.is(Unwrap(Wrap(List())), List(), "Lists should be unwrapped");
        tt.is(Unwrap(Wrap(1)), 1, "number should be unwrapped");
        tt.is(Unwrap(Wrap("A")), "A", "string should be unwrapped");
    });
}
