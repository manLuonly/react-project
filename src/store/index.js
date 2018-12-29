// 创建仓库
import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/city';
import cityReducer from './reducers/todo';

// combineReducers 对两个小reducer做合并
const store = createStore(combineReducers({
  city: cityReducer,
  todos: todoReducer
}))

export default store;
