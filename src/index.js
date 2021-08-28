import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'playbook-ui/dist/fonts/fontawesome-min';
 import 'playbook-ui/dist/fonts/regular-min';
 import 'playbook-ui/dist/playbook.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import GraphProvider from "../src/components/GraphProvider/GraphProvider"

ReactDOM.render(
  <React.StrictMode>
       <GraphProvider>
    <App />
    </GraphProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
