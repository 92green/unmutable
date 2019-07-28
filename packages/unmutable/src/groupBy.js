// @flow
import prep from './internal/unmutable';
import reduce from './reduce';

export default prep({
    n: 'groupBy',
    i: 'groupBy',
    a: (grouper: Function) => reduce((grouped: *, ii: *, key: *, value: *) => {
        let groupKey = grouper(ii, key, value);
        if(!grouped[groupKey]) {
            grouped[groupKey] = [];
        }
        grouped[groupKey].push(ii);
        return grouped;
    }, {}),
    o: (grouper: Function) => reduce((grouped: *, ii: *, key: *, value: *) => {
        let groupKey = grouper(ii, key, value);
        if(!grouped[groupKey]) {
            grouped[groupKey] = {};
        }
        grouped[groupKey][key] = ii;
        return grouped;
    }, {})
});
