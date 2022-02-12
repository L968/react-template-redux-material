import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Master from './components/Master';

export default function Routes() {
    return (
        <BrowserRouter>
            <Master>
                <Switch>
                    <Route exact path="/" element={<Main />} />
                </Switch>
            </Master>
        </BrowserRouter>
    );
}