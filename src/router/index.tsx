//懒加载需要引入 react 中的方法和组件
import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
//直接引入组件
import Home from "@/views/Home";
// import About from "@/views/About";

//路由懒加载,引入组件
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));
/*  
    报错Uncaught Error: A component suspended while responding to synchronous input. 
    This will cause the UI to be replaced with a loading indicator. 
    To fix, updates that suspend should be wrapped with startTransition.

    解决办法：懒加载组件外面包裹一层 Suspense 组件
*/
//封装高阶组件，代码复用
const withLoadingComponent = (comp: JSX.Element) => (
    <Suspense fallback={<div>Loading......</div>}>
        {comp}
    </Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            }
        ]
    }
    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     path: "/page1",
    //     element: withLoadingComponent(<Page1 />)
    // },
    // {
    //     path: "/page2",
    //     element: withLoadingComponent(<Page2 />)
    // }
]

export default routes;

