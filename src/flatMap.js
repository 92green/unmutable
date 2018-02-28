// @flow
import prep from './internal/prep';
import map from './map';
import merge from './merge';
import reduce from './reduce';
import pipe from './util/pipe';

export default prep({
    immutable: 'flatMap',
    all: (mapper: Function): Function => {
        return pipe(
            map(mapper),
            reduce(
                (merged: *, value: *) => merged ? merge(value)(merged) : value,
                undefined
            )
        );
    }
});
