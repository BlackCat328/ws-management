import handleArr from "./index";

// 管理数据
const defaultState = {
    // 解构模块
    ...handleArr.state
}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case handleArr.sarrPush:
            return handleArr.actions[handleArr.sarrPush](newState, action);

        case handleArr.sarrPop:
            return handleArr.actions[handleArr.sarrPop](newState, action);
        default:
            return newState;
    }
}

export default reducer;