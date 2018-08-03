// @flow
import unit from '../unit';
import test from 'ava';
import {fromJS} from 'immutable';

test(`unit() on object should work`, (t: *) => {
    t.deepEqual(
        {a:4, b:6},
        unit({a:4, b:6})({a:1, b:2, c:3}),
        'object -> object'
    );

    t.deepEqual(
        {a:4, b:6},
        unit(fromJS({a:4, b:6}))({a:1, b:2, c:3}),
        'map -> object'
    );
});

test(`unit() on Map should work`, (t: *) => {
    t.deepEqual(
        fromJS({a:4, b:6}),
        unit({a:4, b:6})(fromJS({a:1, b:2, c:3})),
        'object -> map'
    );

    t.deepEqual(
        fromJS({a:4, b:6}),
        unit(fromJS({a:4, b:6}))(fromJS({a:1, b:2, c:3})),
        'map -> map'
    );
});

test(`unit() on array should work`, (t: *) => {
    t.deepEqual(
        [1],
        unit([1])([4,5,6,7]),
        'array -> array'
    );

    t.deepEqual(
        [1],
        unit(fromJS([1]))([4,5,6,7]),
        'list -> array'
    );
});

test(`unit() on List should work`, (t: *) => {
    t.deepEqual(
        fromJS([1]),
        unit([1])(fromJS([4,5,6,7])),
        'array -> list'
    );

    t.deepEqual(
        fromJS([1]),
        unit(fromJS([1]))(fromJS([4,5,6,7])),
        'list -> list'
    );
});
