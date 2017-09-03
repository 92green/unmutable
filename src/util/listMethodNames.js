// @flow
export default function listMethodNames (object: Object): string[] {
    // based on code by Muhammad Umer, https://stackoverflow.com/a/31055217/441899
    let props = [];

    for (let obj = object; obj !== null && obj !== Object.prototype; obj = Object.getPrototypeOf(obj))
    {
        props = props.concat(Object.getOwnPropertyNames(obj));
    }

    return props.sort().filter((e, i, arr) => e != arr[i+1] && typeof object[e] == 'function');
}
