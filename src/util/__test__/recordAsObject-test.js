// @flow
import recordAsObject from '../recordAsObject';
import {Record} from 'immutable';

test(`sanity check - Record.equals() works`, () => {
    let Thing = Record({a:1,b:2});
    let thing1 = new Thing({a:123});
    let thing2 = new Thing({a:123});
    expect(thing1.equals(thing2)).toBe(true);
});

test(`recordAsObject() should allow object functions to work on Records while returning self`, () => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing, true);
    let expectedAnswer = new Thing({a:123});
    expect(answer.equals(expectedAnswer)).toBe(true);
});

test(`recordAsObject() default returnRecord function works`, () => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ({...ii, a:123}), thing);
    let expectedAnswer = new Thing({a:123});
    expect(answer.equals(expectedAnswer)).toBe(true);
});

test(`recordAsObject() should allow object functions to work on Records while not returning self`, () => {
    let Thing = Record({a:1,b:2});
    let thing = new Thing();

    let answer = recordAsObject(ii => ii.a, thing, false);
    expect(1).toEqual(answer);
});
