export default {
    state: {
        sarr: [10, 20, 30]
    },
    actions: {
        sarrpush(newState: { num: number }, action: { type: string, value: number }) {
            newState.num += action.value
            return newState
        },
        subtraction(newState: { num: number }, action: { type: string, value: number }) {
            newState.num -= action.value
            return newState
        }
    },

    //名字统一
    add: "add",
    subtraction: "subtraction"
}