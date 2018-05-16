import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv'
import {Provider} from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

dotenv.config();

ReactDOM.render(<Provider store={store}><App/></Provider>,
  document.getElementById('root'));
registerServiceWorker();
