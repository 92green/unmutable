// @flow
import prep from './internal/unmutable';
import reduce from './reduce';

export default prep({
    name: 'groupBy',
    immutable: 'groupBy',
    array: (grouper: Function) => reduce((grouped: *, ii: *, key: *, value: *) => {
        let groupKey = grouper(ii, key, value);
        if(!grouped[groupKey]) {
            grouped[groupKey] = [];
        }
        grouped[groupKey].push(ii);
        return grouped;
    }, {}),
    object: (grouper: Function) => reduce((grouped: *, ii: *, key: *, value: *) => {
        let groupKey = grouper(ii, key, value);
        if(!grouped[groupKey]) {
            grouped[groupKey] = {};
        }
        grouped[groupKey][key] = ii;
        return grouped;
    }, {}),
    ap: true
});
