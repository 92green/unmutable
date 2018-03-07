// @flow
import prep from './internal/prep';
import filter from './filter';
import equals from './equals';

export default prep({
    all: (): Function => {
        let map = new Map();
        return filter((ii: *): boolean => {
            if(map.get(ii)) {
                return false;
            }
            map.set(ii, true);
            return true;
        });
    }
});
