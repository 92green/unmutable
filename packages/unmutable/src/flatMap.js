// @flow
import prep from './internal/unmutable';
import clear from './clear';
import map from './map';
import merge from './merge';
import reduce from './reduce';
import pipeWith from './util/pipeWith';

export default prep({
    n: 'flatMap',
    i: 'flatMap',
    _: (mapper: Function): Function => (value: *): * => {
        return pipeWith(
            value,
            map(mapper),
            reduce(
                (merged: *, value: *) => merged ? merge(value)(merged) : value,
                undefined
            ),
            ii => ii || clear()(value)
        );
    }
});
