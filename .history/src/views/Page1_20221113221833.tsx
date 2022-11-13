import { useSelector } from 'react-redux'

export default function Page1() {

    //useSelector获取仓库数据
    const { num } = useSelector((state) => ({
        num: state.num
    }))

    return (
        <div>
            <div>Page1</div>
            <div>{num}</div>
        </div>
    )
}
