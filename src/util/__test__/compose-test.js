// @flow

import test from 'ava';
import compose from '../compose';

test('compose composes from right to left', (tt: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    tt.is(compose(square)(5), 25);
    tt.is(compose(square, double)(5), 100);
    tt.is(compose(double, square, double)(5), 200);
});

test('compose composes functions from right to left', (tt: Object) => {
    const a = next => x => next(x + 'a');
    const b = next => x => next(x + 'b');
    const c = next => x => next(x + 'c');
    const final = x => x;

    tt.is(compose(a, b, c)(final)(''), 'abc');
    tt.is(compose(b, c, a)(final)(''), 'bca');
    tt.is(compose(c, a, b)(final)(''), 'cab');
});

test('compose throws at runtime if argument is not a function', (tt: Object) => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => compose(square, add, false)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => compose(square, add, undefined)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => compose(square, add, true)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => compose(square, add, NaN)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    tt.throws(() => compose(square, add, '42')(1));
});

test('compose returns the first given argument if given no functions', (tt: Object) => {
    tt.is(compose()(1, 2), 1);
    tt.is(compose()(3), 3);
    tt.is(compose()(), undefined);
});

test('compose returns the first function if given only one', (tt: Object) => {
    const fn = () => {};

    tt.is(compose(fn), fn);
});
