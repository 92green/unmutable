// @flow
import prep from './internal/prep';
import pipeWith from './util/pipeWith';
import clear from './clear';
import first from './first';
import reduce from './reduce';
import set from './set';
import update from './update';

export default prep({
    name: 'pivot',
    all: () => (value: *): * => {

        let outerContainer = pipeWith(
            value,
            clear()
        );

        let innerContainer = pipeWith(
            value,
            first(),
            clear()
        );

        return pipeWith(
            value,
            reduce((pivoted: *, outerValue: *, outerKey: *): * => pipeWith(
                outerValue,
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
