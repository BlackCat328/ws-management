import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import NumStatusReducer from "./NumStatus/reducer"
import ArrStatusReducer from "./ArrStatus/reducer"

// 使用 combineReducers 合并模块化的 reducer
const reducers = combineReducers({
    NumStatusReducer,
    ArrStatusReducer
})

//创建数据仓库
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//为了让浏览器正常使用 redux-dev-tools 插件
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//异步 store 配置
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//把仓库数据，浏览器re'du'x
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;