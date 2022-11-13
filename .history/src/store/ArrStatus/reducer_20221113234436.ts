import handleArr from "./index";

let reducer = (state = { ...handleArr.state }, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    for (let name in handleArr.actionNames) {
        // 判断是否相等
        if (handleArr.actionNames[name] === action.type) {
            handleArr.actions[handleArr.actionNames[name]](newState, action);
            break;
        }
    }

    return new
}

export default reducer;