// @flow
import pipe from './pipe';
export default (item: *, ...funcs: Array<Function>) => pipe(...funcs)(item);
