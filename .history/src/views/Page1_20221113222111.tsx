import { useSelector, } from 'react-redux'

export default function Page1() {

    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state) => ({
        num: state.num
    }))

    //修改仓库数据
    const changeNum = () => {

    }

    return (
        <div>
            <div>Page1</div>
            <div>num：{num}</div>
            <button onClick={changeNum}>num++</button>
        </div>
    )
}
