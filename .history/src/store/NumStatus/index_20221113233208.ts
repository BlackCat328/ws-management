export default {
    state: {
        num: 20
    },
    actions: {
        add(newState: { num: number }, action: { type: string, value: number }) {
            newState.num += action.value
            return newState
        },
        subtraction(newState: { num: number }, action: { type: string, value: number }) {
            newState.num -= action.value
            return newState
        }
    },

    //名字统一
    // add: "add",
    // subtraction: "subtraction"
}