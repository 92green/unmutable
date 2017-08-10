import React from 'react';
import {Map, List} from 'immutable';
import {from} from 'unmutable';

export default function Page(props) {
    const str = from("string");
    const obj = from({
        hello: "obj"
    })

    const map = from(Map({
        hello: "map"
    }))

    const nestedObj = from({
        hi: {
            ahoy: "hey"
        }
    })

    console.log(str.done());
    console.log(obj.done());
    console.log(map.done());
    console.log(nestedObj.get('hi').done());
    console.log(nestedObj.get('hi').get('ahoy').done());
    console.log(nestedObj.get('hi').get('none').done());

    const lots = {
        a: "A",
        b: "B",
        c: "C"
    };

    const lotsObj = from(lots);
    const lotsMap = from(Map(lots));


    const lotsMapStuff = lotsMap.map(ii => ii + "!").filter((ii, kk) => kk !== "b").done();
    console.log(lotsMapStuff);

    const someObjStuff = lotsObj.map(ii => ii + "!");
    console.log(someObjStuff);

    const lotsObjStuff = lotsObj.map(ii => ii + "!").filter((ii, kk) => kk !== "b").done();
    console.log(lotsObjStuff);



    return <p>Yeah cool and all that</p>;
}
