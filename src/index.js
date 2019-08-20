import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers'
import * as serviceWorker from './serviceWorker';
import {
    Header
} from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Screen/Home/Home';
import DetailPokemon from './Screen/DetailPokemon/DetailPokemon';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducers, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Header/>
                <div>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/pokemon/:pokemon/' component={DetailPokemon} />
                        <Redirect from='/pokemon' to='/'/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
