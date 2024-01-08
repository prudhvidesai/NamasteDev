
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About"
import Contact from './components/Contact.js'
import RestaurantInfo from "./components/RestaurantInfo"
import Error from "./components/Error"

const Title = ()=>{
    return(
        <div className="bg-cont">
         <Header />
         <Outlet />
        </div>
        
    )
}
const appRoute = createBrowserRouter([
    {
        path:'/',
        element:<Title/>,
        children:[
            {
                path:'/',
                element:<Body/>,
                
            },
            {
                path:'/about',
                element:<About/>,
                
            },
            {
                path:'/contact',
                element:<Contact/>,
               
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantInfo/>,
            },
        
        ],
        errorElement:<Error/>,
        
    },
    
    

   ])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute} /> )

