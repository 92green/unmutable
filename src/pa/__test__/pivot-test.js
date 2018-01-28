// @flow
import pivot from '../pivot';
import test from 'ava';
import {fromJS} from 'immutable';

test('pivot should pivot arrays and lists', (tt: *) => {
    let data = [
        [1,2,3],
        [4,5,6]
    ];

    let expectedData = [
        [1,4],
        [2,5],
        [3,6]
    ];

    tt.deepEqual(expectedData, pivot()(data));
    tt.deepEqual(expectedData, pivot()(fromJS(data)).toJS());
});

test('pivot should pivot objects and maps', (tt: *) => {
    let data = {
        a: {
            x: {
                qqq: 111
            },
            y: {
                qqq: 222
            }
        },
        b: {
            x: {
                qqq: 333
            }
        },
        c: {
            y: {
                qqq: 444
            },
            z: {
                qqq: 555
            }
        }
    };

    let expectedData = {
        x: {
            a: {
                qqq: 111
            },
            b: {
                qqq: 333
            }
        },
        y: {
            a: {
                qqq: 222
            },
            c: {
                qqq: 444
            }
        },
        z: {
            c: {
                qqq: 555
            }
        }
    };

    tt.deepEqual(expectedData, pivot()(data));
    tt.deepEqual(expectedData, pivot()(fromJS(data)).toJS());
});
