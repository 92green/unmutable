// @flow
export default function KeyArray(self: UnmutableWrapperType): Array<number|string> {
    if(self.value.keySeq) {
        return self
            .value
            .keySeq()
            .toArray();
    }
    let keys: Array<string|number> = [];
    if(Array.isArray(self.value)) {
        let {size} = self;
        for(let i = 0; i < size; i++) {
            keys.push(i);
        }
        return keys;
    }
    for(var key in self.value) {
        keys.push(key);
    }
    return keys;
}
