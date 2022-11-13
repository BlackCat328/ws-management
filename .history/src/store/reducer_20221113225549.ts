import handleNum from "./NumStatus";
// 管理数据
const defaultState = {
    // 解构
    ...handleNum.state
}

let reducer = (state = defaultState, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))
    const {} =
    switch (action.type) {
        case 'add':

            return newState;
        case 'subtraction':

            return newState;

        default:
            return newState;
    }
}

export default reducer;