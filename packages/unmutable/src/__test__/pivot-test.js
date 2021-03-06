// @flow
import pivot from '../pivot';
import {fromJS} from 'immutable';

test('pivot should pivot arrays and lists', () => {
    let data = [
        [1,2,3],
        [4,5,6]
    ];

    let expectedData = [
        [1,4],
        [2,5],
        [3,6]
    ];

    expect(expectedData).toEqual(pivot()(data));
    expect(expectedData).toEqual(pivot()(fromJS(data)).toJS());
});

test('pivot should pivot objects and maps', () => {
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

    expect(expectedData).toEqual(pivot()(data));
    expect(expectedData).toEqual(pivot()(fromJS(data)).toJS());
});
