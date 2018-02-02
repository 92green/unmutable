// @flow
import recordAsObject from '../recordAsObject';
import test from 'ava';
import {Record} from 'immutable';

test(`sanity check - Record.equals() works`, (tt: *) => {
    let Thing = Record({a:1,b:2});
    let thing1 = new Thing({a:123});
    let thing2 = new Thing({a:123});
    tt.true(thing1.equals(thing2));
});

test(`recordAsObject() should allow object functions to work on Records while returning self`, (tt: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing, true);
    let expectedAnswer = new Thing({a:123});
    tt.true(answer.equals(expectedAnswer));
});

test(`recordAsObject() default returnRecord function works`, (tt: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing);
    let expectedAnswer = new Thing({a:123});
    tt.true(answer.equals(expectedAnswer));
});

test(`recordAsObject() should allow object functions to work on Records while not returning self`, (tt: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ii.a, thing, false);
    tt.deepEqual(1, answer);
});
