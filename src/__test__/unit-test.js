// @flow
import unit from '../unit';
import test from 'ava';
import {fromJS} from 'immutable';

test(`unit() on object should work`, (tt: *) => {
    tt.deepEqual(
        {a:4, b:6},
        unit({a:4, b:6})({a:1, b:2, c:3}),
        'object -> object'
    );

    tt.deepEqual(
        {a:4, b:6},
        unit(fromJS({a:4, b:6}))({a:1, b:2, c:3}),
        'map -> object'
    );
});

test(`unit() on Map should work`, (tt: *) => {
    tt.deepEqual(
        fromJS({a:4, b:6}),
        unit({a:4, b:6})(fromJS({a:1, b:2, c:3})),
        'object -> map'
    );

    tt.deepEqual(
        fromJS({a:4, b:6}),
        unit(fromJS({a:4, b:6}))(fromJS({a:1, b:2, c:3})),
        'map -> map'
    );
});

test(`unit() on array should work`, (tt: *) => {
    tt.deepEqual(
        [1],
        unit([1])([4,5,6,7]),
        'array -> array'
    );

    tt.deepEqual(
        [1],
        unit(fromJS([1]))([4,5,6,7]),
        'list -> array'
    );
});

test(`unit() on List should work`, (tt: *) => {
    tt.deepEqual(
        fromJS([1]),
        unit([1])(fromJS([4,5,6,7])),
        'array -> list'
    );

    tt.deepEqual(
        fromJS([1]),
        unit(fromJS([1]))(fromJS([4,5,6,7])),
        'list -> list'
    );
});
