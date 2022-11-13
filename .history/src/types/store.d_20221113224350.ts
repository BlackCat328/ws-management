//【注】类型声明里面不要使用引入 import ... from ...
// import store from '@/store' 不要直接引入
// ts中提供了ReturnType,用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>