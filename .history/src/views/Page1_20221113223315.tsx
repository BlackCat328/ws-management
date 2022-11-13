import { useSelector, useDispatch } from 'react-redux'

export default function Page1() {

    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state) => ({
        num: state.num
    }))

    // 通过 useDispatch 修改仓库数据
    const dispatch = useDispatch()
    //
    const addNum = () => {
        // dispatch({ type: '字符串,操作的名字', value: 操作的数据 })
        dispatch({ type: 'add', value: 2 })
    }
    const subtractionNum = () => {
        dispatch({ type: 'subtraction', value: 6 })
    }

    return (
        <div>
            <div>Page1</div>
            <div>num：{num}</div>
            <button onClick={addNum}>num加</button>
            <button onClick={subtractionNum}>num减</button>
        </div>
    )
}
