import { useSelector, useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Page2() {
    const dispatch = useDispatch()

    const { sarr } = useSelector((state: RootState) => ({
        sarr: state.sarr
    }))

    const arrPush = () => {
        const value = Math.floor(Math.random() * 1000)
        dispatch({ type: 'sarrPush', value })
    }

    const arrPop = () => {
        dispatch({ type: 'sarrPush' })
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
