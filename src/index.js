import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ButtonIncrement from './basics/01_button.increment';
import * as serviceWorker from './serviceWorker';
import GitHubApp from './basics/02_Github.profile';
import StarMatch from './basics/03_StarMatch';

ReactDOM.render(
  <React.StrictMode>
    {/* <ButtonIncrement /> */}
    {/* <GitHubApp title="The GitHub Cards App" /> */}
    <StarMatch/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
