import './index.css'

import {persistor, store} from './redux/store.js';

import App from './App.jsx'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading ={null} persistor = {persistor}>
    <App />
    </PersistGate>
  </Provider>
)
