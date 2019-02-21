// @flow

export default (fn: Function, times: number = 1, groups: number = 1) => {
    let msArray = [];
    for(let i = 0; i < groups; i++) {
        let start = process.hrtime();
        for(let j = 0; j < times; j++) {
            fn();
        }
        let end = process.hrtime(start);
        let ms = end[0] * 1000 + end[1] / 1000000;
        msArray.push(ms);
    }
    return msArray.reduce((sum, val) => sum + val, 0) / groups;
};
