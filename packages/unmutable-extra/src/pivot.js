// @flow

export default function pivot(): Function {
    return (input: UnmutableWrapperType): UnmutableWrapperType => {
        let outerContainer = input.clear();
        let innerContainer = input.first().clear();
        return input
            .reduce((pivoted: UnmutableWrapperType, outerItem: UnmutableWrapperType, outerKey: *): UnmutableWrapperType => {
                return outerItem.reduce((pp: UnmutableWrapperType, value: UnmutableWrapperType, innerKey: *): UnmutableWrapperType => {
                    return pp.update(
                        innerKey,
                        (ii) => (ii.value ? ii : outerContainer).set(outerKey, value)
                    );
                }, pivoted);
            }, innerContainer)
            .value;
    };
}
