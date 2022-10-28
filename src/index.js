import React from 'react';
import './assets/css/common.less'
import './assets/css/font.css'
import './assets/css/iconfont.css'
import { createRoot } from 'react-dom/client';
import Routes from './router';


const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App />);
root.render(<React.StrictMode>
  <Routes />
</React.StrictMode>)