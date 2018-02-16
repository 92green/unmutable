// @flow
import join from '../join';
import compare from '../../internal/compare';

compare({
    name: `join() joins a object`,
    item: {a:'1', b:'2'},
    fn: join()
});

compare({
    name: `join() joins an object with separator`,
    item: {a:'1', b:'2'},
    fn: join('|')
});

compare({
    name: `join() joins an array`,
    item: ['1','2','3'],
    fn: join()
});

compare({
    name: `join() joins an array with separator`,
    item: ['1','2','3'],
    fn: join('|')
});
