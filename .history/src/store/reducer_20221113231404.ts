import handleNum from "./NumStatus";
import handleArr from "./ArrStatus";
// 管理数据
const defaultState = {
    // 解构模块
    ...handleNum.state,
    ...handleArr.state
}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case handleNum.add:
            return handleNum.actions[handleNum.add](newState, action);

        case handleNum.subtraction:
            return handleNum.actions[handleNum.subtraction](newState, action);

        case handleArr.sarrPush:
            return handleNum.actions[handleArr.sarrPush](newState, action);

        case handleArr.sarrPop:
            return handleNum.actions[handleArr.sarrPop](newState, action);
        default:
            return newState;
    }
}

export default reducer;