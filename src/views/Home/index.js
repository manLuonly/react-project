import React, { Component } from 'react';
import Tabbar from '../../Components/Tabbar';
import './index.less';
export default class Home extends Component {
  constructor(props) {
    super(props);
    //定义好数据
    this.state = {
      Tabs: [
        { key: 'films', href: "/films", icon: "icon-baoguofahuo-xianxing", name: "电影"},
        { key: 'cinemas', href: "/cinemas", icon: "icon-baoguofahuo-xianxing", name: "影院"},
        { key: 'center', href: "/center", icon: "icon-baoguofahuo-xianxing", name: "我的"}
      ]
    }
  }
  render() {
    return (
      <div>
        {/* 传递参数到Tabbar(父组件传值) */}
        <Tabbar tabs={this.state.Tabs}></Tabbar>
      </div>
    )
  }
}
