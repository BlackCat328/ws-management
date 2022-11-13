import loginStyles from './login.module.scss';

export default function Login() {
    return (
        <div className={loginStyles.login}>
            <div className={loginStyles.login}>
                <h2>用户登录</h2>
                <div className={loginStyles.login_box}>
                    <input type="text" required /><label>用户名</label>
                </div>
                <div className={loginStyles.login_box}>
                    <input type="password" required /><label>密码</label>
                </div>
                <a href="javascript:void(0)">
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
