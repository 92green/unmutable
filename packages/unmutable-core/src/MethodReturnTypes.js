// @flow
const methodReturnTypes: Object = {
    butLast: "self",
    clear: "self",
    concat: "self",
    count: "plain",
    delete: "self",
    deleteIn: "self",
    every: "plain",
    filter: "self",
    filterNot: "self",
    first: "wrapped",
    flatMap: "self",
    get: "wrapped",
    getIn: "wrapped",
    has: "plain",
    hasIn: "plain",
    includes: "plain",
    insert: "self",
    interleave: "self",
    interpose: "self",
    isEmpty: "plain",
    last: "wrapped",
    map: "self",
    mapEntries: "self",
    mapKeys: "self",
    merge: "self",
    mergeWith: "self",
    pop: "self",
    push: "self",
    rest: "self",
    reverse: "self",
    set: "self",
    setIn: "self",
    shift: "self",
    skip: "self",
    skipLast: "self",
    skipUntil: "self",
    skipWhile: "self",
    slice: "self",
    some: "plain",
    sort: "self",
    sortBy: "self",
    take: "self",
    takeLast: "self",
    takeUntil: "self",
    takeWhile: "self",
    unshift: "self",
    update: "self",
    updateIn: "self"
};

export default methodReturnTypes;