// @flow
import prep from '../internal/prep';
import pipe from '../util/pipe';
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

        let firstKey: number|string = pipe(
            keyArray(),
            first()
        )(item);

        let innerContainer = pipe(
            get(firstKey),
            clear()
        )(item);

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
