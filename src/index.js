import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/ConfigureStore';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import 'babel-polyfill';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
    <muiThemeProvider>
        <Provider store={store}>
            <Router history={history} routes={route} />
        </Provider>
    </muiThemeProvider>,
                document.getElementById('root')
)
