// @flow
import defaults from '../defaults';
import {fromJS} from 'immutable';

test(`defaults() on object should work`, () => {
    expect({a:1, b:2}).toEqual(defaults({})({a:1, b:2}));

    expect({a:1, b:2}).toEqual(defaults({a:10})({a:1, b:2}));

    expect({a:10, b:2}).toEqual(defaults({a:10})({b:2}));
});

test(`defaults() on map should work`, () => {
    expect({a:1, b:2}).toEqual(defaults(fromJS({}))(fromJS({a:1, b:2})).toJS());

    expect({a:1, b:2}).toEqual(defaults(fromJS({a:10}))(fromJS({a:1, b:2})).toJS());

    expect({a:10, b:2}).toEqual(defaults(fromJS({a:10}))(fromJS({b:2})).toJS());
});
