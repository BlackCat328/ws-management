import { legacy_createStore, combineReducers } from 'redux';
// import reducer from './reducer.ts';
// 合并模块化的 reducer
import NumReducer from "./NumStatus/reducer"
import ArrReducer from "./ArrStatus/reducer"

const reducers = combineReducers({
    NumReducer,
    ArrStatus
})

//创建数据仓库
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//为了让浏览器正常使用 redux-dev-tools 插件
const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;