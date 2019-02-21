// @flow
import type {Node} from "react";

import React from "react";
import {Helmet} from "react-helmet";
import {Head} from 'dcme-style';

import "./index.scss";

type Props = {
    children: *
};

export default ({children}: Props): Node => <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Unmutable</title>
        <meta name="description" content="An immutable, functional data collection library for plain old Javascript." />
    </Helmet>
    <Head />
    {children}
</div>;
