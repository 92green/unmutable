// @flow
export default function IsKeyed(item: *): boolean {
    return !!(item && typeof item === "object");
}
