import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"

export default createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }
])