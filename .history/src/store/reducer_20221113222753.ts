// 管理数据
const defaultState = {
    num: 20
}

let reducer = (state = defaultState, action: { type: string, value: any }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add':
            return newState.num+acvvalue;

        default:
            return newState;
    }
}

export default reducer;