// @flow
import defaults from '../defaults';
import test from 'ava';
import {fromJS} from 'immutable';

test(`defaults() on object should work`, (tt: *) => {
    tt.deepEqual(
        {a:1, b:2},
        defaults({})({a:1, b:2})
    );

    tt.deepEqual(
        {a:1, b:2},
        defaults({a:10})({a:1, b:2})
    );

    tt.deepEqual(
        {a:10, b:2},
        defaults({a:10})({b:2})
    );
});

test(`defaults() on map should work`, (tt: *) => {
    tt.deepEqual(
        {a:1, b:2},
        defaults(fromJS({}))(fromJS({a:1, b:2})).toJS()
    );

    tt.deepEqual(
        {a:1, b:2},
        defaults(fromJS({a:10}))(fromJS({a:1, b:2})).toJS()
    );

    tt.deepEqual(
        {a:10, b:2},
        defaults(fromJS({a:10}))(fromJS({b:2})).toJS()
    );
});
