import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.less';

class Tabbar extends Component {
  render() {
    // 接收从Home传递过来的值
    let tabs = this.props.tabs;
    console.log(tabs)
    return (
      <ul className="tab-bar">
        {
          // 循环从Home传递过来的值
          tabs.map(item => {
            return (
              <li className="tab-bar__item"
              key={item.key}>
              <NavLink to={item.href}>
               <i className={`iconfont ${item.icon}`}></i>
               <span>{item.name}</span>
               </NavLink>
             </li>
            )
          })
        }
      </ul>
    )
  }
}

Tabbar.prototypes = {
  tabs: PropTypes.array
}

export default Tabbar;
