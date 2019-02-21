// @flow
import prep from './internal/unmutable';
import groupBy from './groupBy';
import toArray from './toArray';
import pipeWith from './util/pipeWith';

export default prep({
    name: "deal",
    all: (groups: number): * => (value: *): *[] => {
        let groupNumber: number = -1;
        return pipeWith(
            value,
            groupBy(() => {
                groupNumber++;
                if(groupNumber >= groups) {
                    groupNumber = 0;
                }
                return groupNumber;
            }),
            toArray()
        );
    }
});
