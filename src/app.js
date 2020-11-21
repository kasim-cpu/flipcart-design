import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import AnonymousRoute from './CustomRoute/AnonymousRoute';
import AuthenticatedRoute from './CustomRoute/Authenticated.Route';

import Store from '@/ReduxStore';
import HomeComponent from '@/Components/Home';
import LoginFormComponent from '@/Components/LoginForm';

import './app.scss';

const App = () => (
    <BrowserRouter>
        <Fragment>
            <AnonymousRoute exact path="/" authenticated={typeof authenticated !== 'undefined'} component={HomeComponent} />
            {/* <AnonymousRoute exact path="/" authenticated={typeof authenticated !== 'undefined'} component={LoginFormComponent} /> */}
        </Fragment>
    </BrowserRouter>
);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('app'));
