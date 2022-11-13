//【注】类型声明里面不要使用引入 import ... from ...
// 而是使用 import(url) 语法
// import store from '@/store' 不要直接引入
// ts中提供了ReturnType,用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>;
// 解决window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()警告错误
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function
}