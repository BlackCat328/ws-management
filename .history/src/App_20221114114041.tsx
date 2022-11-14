import { useRoutes } from 'react-router-dom';
import router from './router';


function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  return outlet;
}

function App() {

  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}

      {/* 占位符组件，类似于窗口，用来展示组件的，有点像 vue 中的 router-view */}
      {/* <Outlet /> */}

      {/* 路由表写法 */}
      {/* {outlet} */}

      {/* 路由守卫，自己封装 */}
        
    </div>
  )
}

export default App
