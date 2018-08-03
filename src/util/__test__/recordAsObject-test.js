// @flow
import recordAsObject from '../recordAsObject';
import test from 'ava';
import {Record} from 'immutable';

test(`sanity check - Record.equals() works`, (t: *) => {
    let Thing = Record({a:1,b:2});
    let thing1 = new Thing({a:123});
    let thing2 = new Thing({a:123});
    t.true(thing1.equals(thing2));
});

test(`recordAsObject() should allow object functions to work on Records while returning self`, (t: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing, true);
    let expectedAnswer = new Thing({a:123});
    t.true(answer.equals(expectedAnswer));
});

test(`recordAsObject() default returnRecord function works`, (t: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing);
    let expectedAnswer = new Thing({a:123});
    t.true(answer.equals(expectedAnswer));
});

test(`recordAsObject() should allow object functions to work on Records while not returning self`, (t: *) => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ii.a, thing, false);
    t.deepEqual(1, answer);
});
