// @flow
import type {Node} from 'react';

import React from 'react';
import {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import {Box} from 'dcme-style';
import {Link} from 'dcme-style';
import {Message} from 'dcme-style';
import {Text} from 'dcme-style';
import {Typography} from 'dcme-style';

import Code from './Code';
import Example from './Example';

import interpose from 'unmutable/lib/interpose';
import map from 'unmutable/lib/map';
import pipeWith from 'unmutable/lib/pipeWith';

type Props = {
    aliases?: string[],
    description?: string,
    definition?: string,
    example?: string|string[],
    immutablejs?: boolean,
    name: string,
    note?: string,
    types?: string[]
};

const getSimpleName = (name: string): string => name.replace("()","");

export default (props: Props): Node => {
    let {
        aliases,
        description,
        definition,
        example,
        immutablejs,
        note
    } = props;

    let aliasesElements = aliases
        ? pipeWith(
            aliases,
            map((alias, key) => {
                let simpleName = getSimpleName(alias);
                return <Text modifier="weightKilo" key={key}>{simpleName}</Text>;
            }),
            interpose(", ")
        )
        : null;

    return <Typography>
        {definition &&
            <Code language="flow">{definition}</Code>
        }
        {description &&
            <Fragment>
                <ReactMarkdown source={description} />
                {immutablejs && <Text element="p" modifier="weightMilli sizeMilli">Description from <Link href="https://facebook.github.io/immutable-js/docs/">Immutable.js' docs</Link>.</Text>}
            </Fragment>
        }
        {!description &&
            <Text element="p" modifier="weightMilli sizeMilli">No docs here yet! Try checking <Link href="https://facebook.github.io/immutable-js/docs/">Immutable.js' docs</Link>, if they have a matching function name then Unmutable's function will work the same way.</Text>
        }
        {note &&
            <Box modifier="margin">
                <Message>
                    {note}
                </Message>
            </Box>
        }
        {example &&
            [].concat(example).map((source, index) => <Example key={index} source={source} />)
        }
        {aliasesElements &&
            <Text element="p">Aliases: {aliasesElements}</Text>
        }
    </Typography>;
};


