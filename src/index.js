import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';

import App from './App';
import  './base.less';

ReactDOM.render(
  // 把仓库中的数据传递到所有容器组件中
  <Provider store={store}>
    <App></App>,
  </Provider>,
  document.getElementById('root')
)
