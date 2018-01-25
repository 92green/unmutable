// @flow
import prep from '../internal/prep';
import pipeWith from '../util/pipeWith';
import clear from './clear';
import first from './first';
import get from './get';
import keyArray from './keyArray';
import reduce from './reduce';
import set from './set';
import update from './update';

export default prep({
    all: () => (item: *): * => {
        let outerContainer = clear()(item);

        let firstKey: number|string = pipeWith(
            item,
            keyArray(),
            first()
        );

        let innerContainer = pipeWith(
            item,
            get(firstKey),
            clear()
        );

        return reduce((pivoted: *, outerItem: *, outerKey: *): * => {
            return reduce((pp: *, value: *, innerKey: *): * => {
                return update(
                    innerKey,
                    (ii) => set(outerKey, value)(ii || outerContainer)
                )(pp);
            }, pivoted)(outerItem);
        }, innerContainer)(item);
    }
});
