// @flow
import prep from './internal/unmutable';
import clear from './clear';
import merge from './merge';
import shallowToJS from './shallowToJS';
import pipe from './util/pipe';

export default prep({
    name: 'unit',
    all: (newItem: *) => pipe(
        clear(),
        merge(shallowToJS()(newItem))
    )
});
