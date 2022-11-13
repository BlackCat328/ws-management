import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Page2() {
    // 通过 useSelector 获取仓库数据
    const { sarr } = useSelector((state: RootState) => ({
        sarr: state.sarr
    }))
    return (
        <div>
            <div>Page2</div>
            <div>arr：{sarr}</div>
            <div>arr：{sarr}</div>
        </div>
    )
}
