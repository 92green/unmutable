import React from 'react';
import {Link} from 'react-router';
export default (props) => {
    return <div style={{padding: '24px'}}>
        <h1>Are we immutable? Or are we just pretending?</h1>
        {props.children}
    </div>
}
