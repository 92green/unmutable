// @flow
import type {Node} from 'react';

import React from 'react';
import Prism from 'prismjs';

require(`prismjs/components/prism-flow.js`);
require(`prismjs/components/prism-jsx.js`);

type Props = {
    children: Node,
    language: string,
    modifier?: string
};

export default class Code extends React.Component<Props> {
    render(): Node {
        let {children, modifier = "", language} = this.props;
        let __html = Prism.highlight(children, Prism.languages[language], 'language');
        return <pre className={`language-${language} ${modifier}`}>
            <code>
                <span dangerouslySetInnerHTML={{__html}} />
            </code>
        </pre>;
    }
}
