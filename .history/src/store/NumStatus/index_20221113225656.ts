export default {
    state: {
        num: 20
    },
    actions: {
        add(newState, action) {
            newState.num += action.value
            return
        },
        subtraction(newState, action) {
            newState.num -= action.value
        }
    }
}