import handleArr from "./index";

let reducer = (state = { ...handleArr.state }, action: { type: string, value: number }) => {
    // 调用 dispatch 触发这个函数
    let newState = JSON.parse(JSON.stringify(state))

    actionNames: {
        add: "add",
            subtraction: "subtraction"
    }
}

export default reducer;