const store = {
    state: {
        num: 20
    },
    actions: {
        //只放同步的方法
        add(newState: { num: number }, action: { type: string, value: number }) {
            newState.num += action.value
        },
        subtraction(newState: { num: number }, action: { type: string, value: number }) {
            newState.num -= action.value
        },
        multiplication(newState: { num: number }, action: { type: string, value: number }) {
            newState.num *= action.value
        },
        asyncAdd(newState: { num: number }, action: { type: string, value: number }) {
            newState.num += action.value
        }
    },

    //名字统一
    // add: "add",
    // subtraction: "subtraction"

    // 优化 actionNames,每添加一个 action  方法,里面就加一个对应的名字
    // actionNames: {
    //     add: "add",
    //     subtraction: "subtraction"
    // }
    

    actionNames: {}
}

// 定义一个全局的 actionNames
let actionNames = {};

// 遍历 store 中 actions
for (let key in store.actions) {
    actionNames[key] = key;
}

store.actionNames = actionNames;

export default store;