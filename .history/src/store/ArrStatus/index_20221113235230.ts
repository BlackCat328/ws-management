const store = {
    state: {
        sarr: [10, 20, 30]
    },
    actions: {
        sarrPush(newState: { sarr: number[] }, action: { type: string, value: number }) {
            newState.sarr.push(action.value)
        },
        sarrPop(newState: { sarr: number[] }, action: { type: string, value: number }) {
            newState.sarr.pop()
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

// 定义一个全局的 actionNames
let actionNames = {};

// 遍历 store 中 actions
for (let key in store.actions) {
    actionNames[key] = key;
}

store.actionNames = actionNames;

export