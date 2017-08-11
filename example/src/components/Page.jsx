import React from 'react';
import {fromJS, Map, List} from 'immutable';
import {Wrap} from 'unmutable';

export default function Page(props) {
    const str = "string";

    const obj = {
        hello: "obj"
    };

    const map = Map(obj);

    const nestedObj = {
        hi: {
            ahoy: "hey"
        }
    };

    const nestedMaps = fromJS(nestedObj);

    const objectInMap = Map(nestedObj);

    console.log(str, Wrap(str).done());
    console.log(obj, Wrap(obj).done());
    console.log(map, Wrap(map).done());

    console.log("");
    console.log(nestedObj, "get('hi')", Wrap(nestedObj).get('hi').done());
    console.log(nestedObj, "get('hi').get('ahoy')", Wrap(nestedObj).get('hi').get('ahoy').done());
    console.log(nestedObj, "get('hi').get('none')", Wrap(nestedObj).get('hi').get('none').done());

    console.log("");
    console.log(nestedMaps, "get('hi')", Wrap(nestedMaps).get('hi').done());
    console.log(nestedMaps, "get('hi').get('ahoy')", Wrap(nestedMaps).get('hi').get('ahoy').done());
    console.log(nestedMaps, "get('hi').get('none')", Wrap(nestedMaps).get('hi').get('none').done());

    console.log("");
    console.log(objectInMap, "get('hi')", Wrap(objectInMap).get('hi').done());
    console.log(objectInMap, "get('hi').get('ahoy')", Wrap(objectInMap).get('hi').get('ahoy').done());
    console.log(objectInMap, "get('hi').get('none')", Wrap(objectInMap).get('hi').get('none').done());


    const lotsObj = {
        a: "A",
        b: "B",
        c: "C"
    };

    const lotsMap = Map(lotsObj);

    console.log("");
    const lotsMapStuff = Wrap(lotsMap).map(ii => ii + "!").filter((ii, kk) => kk !== "b").done();
    console.log(lotsMap, "add '!' ... filter out b", lotsMapStuff);

    const lotsObjStuff = Wrap(lotsObj).map(ii => ii + "!").filter((ii, kk) => kk !== "b").done();
    console.log(lotsObj, "add '!' ... filter out b", lotsObjStuff);

    return <p>Yeah cool and all that</p>;
}
