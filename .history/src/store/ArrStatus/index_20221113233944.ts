export default {
    state: {
        sarr: [10, 20, 30]
    },
    actions: {
        sarrPush(newState: { sarr: number[] }, action: { type: string, value: number }) {
            newState.sarr.push(action.value)
            return newState
        },
        sarrPop(newState: { sarr: number[] }, action: { type: string, value: number }) {
            newState.sarr.pop()
            return newState
        }
    },

    //名字统一
    // sarrPush: "sarrPush",
    // sarrPop: "sarrPop"

    actionNames: {
        sarrPush: "sarrPush",
        sarrPop: "sarrPop"
    }
}