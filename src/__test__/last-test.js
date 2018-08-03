// @flow
import last from '../last';
import compare from '../internal/__test__/compare-testutil';

compare({
    name: `last() should get last object item`,
    item: {a:1,b:2,c:3},
    fn: last()
});

compare({
    name: `last() should get last object item of nothing`,
    item: {},
    fn: last()
});

compare({
    name: `last() should get last array item`,
    item: [1,2,3],
    fn: last()
});

compare({
    name: `last() should get last array item of nothing`,
    item: [],
    fn: last()
});
