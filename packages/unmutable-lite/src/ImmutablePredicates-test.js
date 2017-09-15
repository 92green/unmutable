// @flow
import test from 'ava';
import {Map, List} from 'immutable';
import {isMap, isList} from './ImmutablePredicates';

test('isMap should identify maps', (tt: *) => {
    tt.true(isMap(Map()));
    tt.false(isMap(List()));
    tt.false(isMap({}));
});

test('isList should identify lists', (tt: *) => {
    tt.true(isList(List()));
    tt.false(isList(Map()));
    tt.false(isList({}));
});
