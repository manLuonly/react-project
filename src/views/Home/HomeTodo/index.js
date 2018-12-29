import {  connect } from 'react-redux';

connect(
  mapS
)(UI)


// import React, { Component } from 'react';
// import { InputItem, Button, Flex, List, WhiteSpace, Toast, Icon } from 'antd-mobile';
// import store from '@/store';

// class HomeTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Todo: store.getState().todo
//     }
//   }
//   render() {
//     return (
//       <div className="todo">
//         <Flex>
//           <Flex.Item style={{flex:2}}>
//             <InputItem
//               type="text"
//               // 这个参数相当于是给input写了一个class
//               ref="Input"
//               placeholder="请输入内容"
//             >
//             </InputItem>
//           </Flex.Item>

//           <Flex.Item>
//             <Button type="warning">添加</Button>
//           </Flex.Item>
//         </Flex>

//         <WhiteSpace></WhiteSpace>

//         <List>
//          {
//            123
//          }
//         </List>
//       </div>
//     )
//   }
// }

// export default HomeTodo;
