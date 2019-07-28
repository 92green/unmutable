// @flow
import prep from './internal/unmutable';
import toJSON from './toJSON';

export default prep({
    n: 'shallowToJS',
    _: toJSON
});
