import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Page2() {
    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state: RootState) => ({
        num: state.num
    }))
    return (
        <div>Page2</div>
    )
}
