import { useSelector, useDispatch } from 'react-redux'

export default function Page1() {

    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state) => ({
        num: state.num
    }))

    // 通过 useDispatch 修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        // dispatch 
        dispatch({ type: 'add', value: 2 })
    }

    return (
        <div>
            <div>Page1</div>
            <div>num：{num}</div>
            <button onClick={changeNum}>num++</button>
        </div>
    )
}
