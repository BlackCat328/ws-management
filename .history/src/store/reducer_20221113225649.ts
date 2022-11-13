import handleNum from "./NumStatus";
// 管理数据
const defaultState = {
    // 解构
    ...handleNum.state
}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))
    const { add, subtraction } = handleNum.actions
    switch (action.type) {
        case 'add':
            return add(newState, action);

        case 'subtraction':
            return subtraction(newState, action);

        default:
            return newState;
    }
}

export default reducer;