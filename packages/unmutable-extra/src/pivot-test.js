// @flow
import test from 'ava';
import {Wrap} from 'unmutable-lite';
import {pivot} from './index';

test('pivot should pivot arrays', (tt: *) => {
    let data = Wrap([
        [1,2,3],
        [4,5,6]
    ]);

    let expectedData = [
        [1,4],
        [2,5],
        [3,6]
    ];

    tt.deepEqual(expectedData, data.update(pivot()).value);
});

test('pivot should pivot objects', (tt: *) => {
    let data = Wrap({
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
    });

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

    tt.deepEqual(expectedData, data.update(pivot()).value);
});
