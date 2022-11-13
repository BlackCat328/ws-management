import handleArr from "./index";

let reducer = (state = { ...handleArr.state }, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    for (let name in handleNum.actionNames) {
        // 判断是否相等
        if (handleNum.actionNames[name] === action.type) {
            return handleNum.actions[name](newState, action);
        }
    }
}

export default reducer;