export default {
    state: {
        num: 20
    },
    actions: {
        add(newState: { num: number }, action:{ty}) {
            newState.num += action.value
            return newState
        },
        subtraction(newState, action) {
            newState.num -= action.value
            return newState
        }
    }
}