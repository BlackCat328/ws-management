export default {
    state: {
        num: 20
    },
    actions: {
        add(newState: { num: number }, action:{}) {
            newState.num += action.value
            return newState
        },
        subtraction(newState, action) {
            newState.num -= action.value
            return newState
        }
    }
}