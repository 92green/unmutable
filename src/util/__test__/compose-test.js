// @flow

import test from 'ava';
import compose from '../compose';

test('compose composes from right to left', (t: Object) => {
    const double = x => x * 2;
    const square = x => x * x;
    t.is(compose(square)(5), 25);
    t.is(compose(square, double)(5), 100);
    t.is(compose(double, square, double)(5), 200);
});

test('compose composes functions from right to left', (t: Object) => {
    const a = next => x => next(x + 'a');
    const b = next => x => next(x + 'b');
    const c = next => x => next(x + 'c');
    const final = x => x;

    t.is(compose(a, b, c)(final)(''), 'abc');
    t.is(compose(b, c, a)(final)(''), 'bca');
    t.is(compose(c, a, b)(final)(''), 'cab');
});

test('compose throws at runtime if argument is not a function', (t: Object) => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => compose(square, add, false)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => compose(square, add, undefined)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => compose(square, add, true)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => compose(square, add, NaN)(1));
    // $FlowFixMe - deliberate misuse of types for testing
    t.throws(() => compose(square, add, '42')(1));
});

test('compose returns the first given argument if given no functions', (t: Object) => {
    t.is(compose()(1, 2), 1);
    t.is(compose()(3), 3);
    t.is(compose()(), undefined);
});

test('compose returns the first function if given only one', (t: Object) => {
    const fn = () => {};

    t.is(compose(fn), fn);
});
