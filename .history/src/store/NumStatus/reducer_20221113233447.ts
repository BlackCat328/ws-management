import handleNum from "./index";

let reducer = (state = { ...handleNum.state }, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    // 优化 switch
    // switch (action.type) {
    //     case handleNum.add:
    //         return handleNum.actions[handleNum.add](newState, action);

    //     case handleNum.subtraction:
    //         return handleNum.actions[handleNum.subtraction](newState, action);

    //     default:
    //         return newState;
    // }

    // 优化思路: switch的做法其实就是遍历,将action中的type名做成对象,actionNames
    // na

}

export default reducer;