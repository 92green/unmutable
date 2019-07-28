// @flow
import type {Node} from 'react';

import React from 'react';
import inspect from 'browser-util-inspect';
import {Box} from 'dcme-style';
import {Textarea} from 'dcme-style';
import * as UnmutableMethods from 'unmutable';
import Code from './Code';

import {pipeWith} from 'unmutable';
import {join} from 'unmutable';
import {keyArray} from 'unmutable';
import {map} from 'unmutable';

if(typeof window !== "undefined") {
    window.Unmutable = UnmutableMethods;
}

// import Prism from 'prismjs';

// require(`prismjs/components/prism-flow.js`);
// require(`prismjs/components/prism-jsx.js`);

type Props = {
    source: string
};

type State = {
    text: string,
    answer: any
};

export default class Example extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: this.cleanSource(props.source),
            answer: this.evaluate(props.source)
        };
    }

    cleanSource = (source: string): string => {
        return source
            .split('\n')
            .slice(1, -1)
            .map(str => str.replace(/^\s*/g, ''))
            .join('\n');
    };

    evaluate = (source: string): any => {
        let regex = pipeWith(
            UnmutableMethods,
            keyArray(),
            map(str => `\\b${str}\\(`),
            join("|"),
            all => new RegExp(`(${all})`, 'g')
        );

        try {
            return eval(source.replace(regex, 'Unmutable.$1'));
        } catch(e) {
            return `// Error: ${e.message}`;
        }
    };

    render(): Node {
        let {text} = this.state;
        return <Box>
            <Textarea
                value={text}
                onChange={(text) => {
                    this.setState({
                        text,
                        answer: this.evaluate(text)
                    });
                }}
            />
            {this.renderAnswer()}
        </Box>;
        //return <Text element="p">{JSON.stringify(eval("Unmutable.butLast()([0,1,2])"))}</Text>;
    }

    renderAnswer = (): Node => {
        return <Code language="js">
            {inspect(this.state.answer)}
        </Code>;
    };
}
