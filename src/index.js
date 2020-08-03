import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Covid from './components/covid19/covid';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/JS-Projects" render={() => {
            return (
                <div>
                    <Link to="/JS-Projects/help">help</Link>
                </div>
            );
        }} />
        <Route exact path="/covid-19" component={Covid} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
