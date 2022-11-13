import handle from "./NumStatus";
// 管理数据
const defaultState = {
    ...NumStatus.state
}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add':
            newState.num += action.value
            return newState;
        case 'subtraction':
            newState.num -= action.value
            return newState;

        default:
            return newState;
    }
}

export default reducer;