import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Page1() {
    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state: RootState) => ({
        num: state.NumStatusReducer.num
    }))

    // 通过 useDispatch 修改仓库数据
    const dispatch = useDispatch()
    //加法操作
    const addNum = () => {
        // dispatch({ type: '字符串,操作的名字', value: 操作的数据 })
        dispatch({ type: 'add', value: 2 })
    }
    //减法操作
    const subtractionNum = () => {
        if (num >= 0) {
            dispatch({ type: 'subtraction', value: 6 })
        } else {
            message.error('不能再减了哟~~')
        }
    }
    //乘法操作
    const multiplicationNum = () => {
        dispatch({ type: 'multiplication', value: 2 })
    }
    //异步加法
    const asyncAddNum = () => {
        // dispatch({ type: 'asyncAdd', value: 10 })
        // 异步写法，传入函数，函数参数就是 dispatch 方法
        dispatch((dis: Function) => {
            setTimeout(() => {
                dis({ type: 'asyncAdd', value: 10 })
            }, 1000)
        })
    }

    return (
        <div>
            <div>Page1</div>
            <div>num：{num}</div>
            <button onClick={addNum}>num加</button>
            <button onClick={subtractionNum}>num减</button>
            <button onClick={multiplicationNum}>num乘2</button>
            <button onClick={asyncAddNum}>num异步加</button>
        </div>
    )
}
