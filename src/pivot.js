// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import clear from './clear';
import first from './first';
import reduce from './reduce';
import set from './set';
import update from './update';

export default prep({
    all: () => (item: *): * => {

        let outerContainer = pipeWith(
            item,
            clear()
        );

        let innerContainer = pipeWith(
            item,
            first(),
            clear()
        );

        return pipeWith(
            item,
            reduce((pivoted: *, outerItem: *, outerKey: *): * => pipeWith(
                outerItem,
                reduce((pp: *, value: *, innerKey: *): * => pipeWith(
                    pp,
                    update(
                        innerKey,
                        outerContainer,
                        set(outerKey, value)
                    )
                ), pivoted)
            ), innerContainer)
        );
    }
});
