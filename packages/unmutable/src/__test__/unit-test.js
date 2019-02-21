// @flow
import unit from '../unit';
import {fromJS} from 'immutable';

test(`unit() on object should work`, () => {
    expect({a:4, b:6}).toEqual(unit({a:4, b:6})({a:1, b:2, c:3}));

    expect({a:4, b:6}).toEqual(unit(fromJS({a:4, b:6}))({a:1, b:2, c:3}));
});

test(`unit() on Map should work`, () => {
    expect(fromJS({a:4, b:6})).toEqual(unit({a:4, b:6})(fromJS({a:1, b:2, c:3})));

    expect(fromJS({a:4, b:6})).toEqual(unit(fromJS({a:4, b:6}))(fromJS({a:1, b:2, c:3})));
});

test(`unit() on array should work`, () => {
    expect([1]).toEqual(unit([1])([4,5,6,7]));

    expect([1]).toEqual(unit(fromJS([1]))([4,5,6,7]));
});

test(`unit() on List should work`, () => {
    expect(fromJS([1])).toEqual(unit([1])(fromJS([4,5,6,7])));

    expect(fromJS([1])).toEqual(unit(fromJS([1]))(fromJS([4,5,6,7])));
});
