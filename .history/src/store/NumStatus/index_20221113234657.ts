

{
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
    actionNames: {
        add: "add",
        subtraction: "subtraction"
    }
}