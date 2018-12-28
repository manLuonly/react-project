import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tabbar from '../../Components/Tabbar';
import './index.less';

import HomeCenter  from './HomeCenter';
import HomeCinemas from './HomeCinemas';
import HomeFilms   from './HomeFilms';
import HomeTodo    from './HomeTodo';

export default class Home extends Component {
  constructor(props) {
    super(props);
    //定义好数据
    this.state = {
      Tabs: [
        { key: 'films', href: "/films", icon: "icon-baoguofahuo-xianxing", name: "电影"},
        { key: 'cinemas', href: "/cinemas", icon: "icon-baoguofahuo-xianxing", name: "影院"},
        { key: 'todo', href: "/todo", icon: "icon-baoguofahuo-xianxing", name: 'Todo' },
        { key: 'center', href: "/center", icon: "icon-baoguofahuo-xianxing", name: "我的"}
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/cinemas" component={HomeCinemas}></Route>
          <Route path="/todo" component={HomeTodo}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          {/* 默认为根(/)时,重定向为首页 */}
          <Redirect to="/films"></Redirect>
        </Switch>
        {/* 传递参数到Tabbar(父组件传值) */}
        <Tabbar tabs={this.state.Tabs}></Tabbar>
      </Fragment>
    )
  }
}
