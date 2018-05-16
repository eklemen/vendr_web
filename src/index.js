import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
