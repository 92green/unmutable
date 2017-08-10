import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppHandler from 'components/AppHandler';
import ErrorHandler from 'components/ErrorHandler';
import Page from 'components/Page';

const routes = <Route component={AppHandler} path="/">
    <IndexRoute component={Page} />
    <Route path="*" component={ErrorHandler}/>
</Route>;

export default routes;
