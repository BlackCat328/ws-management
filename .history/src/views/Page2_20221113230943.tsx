import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Page2() {

    const { sarr } = useSelector((state: RootState) => ({
        sarr: state.sarr
    }))

    const arrPush = () => {
        
    }

    const arrPop = () => {

    }
    return (
        <div>
            <div>Page2</div>
            <div>arr：{sarr}</div>
            <button onClick={arrPush}>push</button>
            <button onClick={arrPop}>pop</button>
        </div>
    )
}
