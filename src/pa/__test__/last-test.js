// @flow
import last from '../last';
import compare from '../../internal/compare';

compare({
    name: `last() should get last item`,
    item: [1,2,3],
    fn: last()
});

compare({
    name: `last() should get last item of nothing`,
    item: [],
    fn: last()
});
