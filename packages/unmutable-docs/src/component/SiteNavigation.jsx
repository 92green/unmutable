// @flow
import React from "react";
import {NavigationList, NavigationListItem} from 'dcme-style';
import Link from './Link';

export default () => <NavigationList modifier="margin">
    <NavigationListItem>
        <Link to="/">Unmutable</Link>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="https://github.com/blueflag/unmutable">Github</a>
    </NavigationListItem>
</NavigationList>;
