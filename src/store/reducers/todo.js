// 拆分出todo的增加与删除功能
//state是上一次的状态(参数,如果没有默认为空状态),action是本次的动作
export default function addTodo(state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
    // 第一个参数为结构赋值上一次的数组(如果没有为初始数组),第二个参数为要添加的参数
      return [...state, action.name];
    case 'DELETE_TODO':
    // 获取上一次的数组
      let newlist = [...state];
      // 第一个参数根据索引删除,第二个参数为删除的个数
      newlist.splice(action.index, 1);
      return newlist;
    default:
      return state
  }
}
