import "./public-path"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

export async function bootstrap() {
  console.log('[react] react app bootstraped');
}

export async function mount(props) {
  console.log(props);
  const root = ReactDOM.createRoot(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/gh/micro-react" : ""}>
      <App />
    </BrowserRouter>
  )
}
export async function update(props) {
  console.log('update props', props);
}

export async function unmount(props) {

  // const { container } = props;
  // ReactDOM.unmountComponentAtNode(
  //   container
  //     ? container.querySelector('#root')
  //     : document.querySelector('#root')
  // );
}

if (!window.__POWERED_BY_QIANKUN__) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/gh/micro-react" : ""}>
      <App />
    </BrowserRouter>
  )
}


reportWebVitals();


