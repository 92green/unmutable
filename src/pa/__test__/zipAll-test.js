// @flow
import zipAll from '../zipAll';
import compare from '../../internal/compare';

compare({
    name: `zipAll() should do its thing`,
    item: [1,2,3],
    fn: zipAll([4,5,6]),
    toJS: true
});

compare({
    name: `zipAll() should do its thing with different array lengths`,
    item: [1,2,3,4,5],
    fn: zipAll([6,7,8]),
    toJS: true
});

compare({
    name: `zipAll() should do its thing with multiple arrays`,
    item: [1,2,3],
    fn: zipAll([6,7,8],[9,10,11,12,13]),
    toJS: true
});
