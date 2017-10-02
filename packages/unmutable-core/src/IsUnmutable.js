// @flow
export default function IsUnmutable(item: *): boolean {
    return !!(item && typeof item === "object" && item.__isUnmutable);
}
