// @flow

export default (fn: Function, record: *, returnSelf: boolean): * => {
    let objectResult = fn(record.toObject());
    return returnSelf
        ? record.__proto__.constructor(objectResult)
        : objectResult;
};
