import { useRoutes } from 'react-router-dom';
import router from './router';


function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  return 
}

function App() {

  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}

      {/* 占位符组件，类似于窗口，用来展示组件的，有点像 vue 中的 router-view */}
      {/* <Outlet /> */}
      {outlet}
    </div>
  )
}

export default App
