// @flow
import prep from './internal/prep';
import get from './get';
import push from './push';
import splice from './splice';
import pipeWith from './util/pipeWith';

export default prep({
    name: "move",
    all: (fromIndex: number, toIndex: number): * => (value: *) => {
        let valueToMove = get(fromIndex)(value);
        let insert = splice(toIndex, 0, valueToMove);
        if(toIndex < 0) {
            insert = toIndex === -1
                ? push(valueToMove)
                : splice(toIndex + 1, 0, valueToMove);
        }

        return pipeWith(
            value,
            splice(fromIndex, 1),
            insert
        );
    }
});
