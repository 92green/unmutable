// @flow
export default (message: string = "", type: string = "log") => (value: *): * => {
    console[type](message, value);
    return value;
};
