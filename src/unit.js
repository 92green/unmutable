// @flow
import prep from './internal/prep';
import clear from './clear';
import merge from './merge';
import shallowToJS from './shallowToJS';
import pipe from './util/pipe';

export default prep({
    all: (newItem: *) => pipe(
        clear(),
        merge(shallowToJS()(newItem))
    )
});
