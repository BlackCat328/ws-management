import store from '@/store'
// ts中提供了ReturnType,用来获取函数类型的返回值
type RootState = ReturnType<typeof store.getState>