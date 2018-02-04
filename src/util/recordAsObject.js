// @flow

export default (updater: Function, record: *, returnRecord: boolean = true): * => {
    let result = updater(record.toObject());
    return returnRecord
        ? record.__proto__.constructor(result)
        : result;
};
