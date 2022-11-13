import handleNum from "./index";

// 管理数据
const defaultState = {
    // 解构模块
    ...handleNum.state,}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case handleNum.add:
            return handleNum.actions[handleNum.add](newState, action);

        case handleNum.subtraction:
            return handleNum.actions[handleNum.subtraction](newState, action);

        default:
            return newState;
    }
}

export default reducer;