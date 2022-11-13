import handleNum from "./index";

let reducer = (state = { ...handleNum.state }, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    // 优化
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