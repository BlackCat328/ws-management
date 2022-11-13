


export default {
    state: {
        num: 20
    },
    actions: {
        add(newState: { num: number }, action: { type: string, value: number }) {
            newState.num += action.value
        },
        subtraction(newState: { num: number }, action: { type: string, value: number }) {
            newState.num -= action.value
        }
    },

    //名字统一
    // add: "add",
    // subtraction: "subtraction"

    // 优化 actionNames,每添加一个action方法，里面就加一个
    actionNames: {
        add: "add",
        subtraction: "subtraction"
    }
}