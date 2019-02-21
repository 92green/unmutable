// @flow
export default (message: string = "", type: string = "log") => (value: *): * => {
    console[type](message, value); /* eslint-disable-line */
    return value;
};
