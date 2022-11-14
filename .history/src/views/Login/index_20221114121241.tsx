import loginStyles from './login.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigateTo = useNavigate()

    const loginSubmit = () => {
        le
        navigateTo('/page1')
    }

    return (
        <div className={loginStyles.loginContainer}>
            <div className={loginStyles.login}>
                <h2>用户登录</h2>
                <div className={loginStyles.login_box}>
                    <input type="text" required /><label>用户名</label>
                </div>
                <div className={loginStyles.login_box}>
                    <input type="password" required /><label>密码</label>
                </div>
                <a href="javascript:void(0)" onClick={loginSubmit}>
                    登录
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </div>
    )
}
