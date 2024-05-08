import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Page/Home/Home.jsx'
import About from './Component/Page/About/About.jsx'
import MainHome from './Component/Layout/MainHome.jsx'
import Tracking from './Component/Page/Tracking/Tracking.tsx'
import Dashboard from './Component/Page/Admin/Dashboard/Dashboard.tsx'
import DashboardLayout from './Component/Layout/DashboardLayout.tsx'
import AdOrder from './Component/Page/Admin/AdOrder/AdOrder.tsx'
import Adlogin from './Component/Page/Admin/Adlogin/Adlogin.tsx'
import Allorders from './Component/Page/Admin/AllOrders/Allorders.tsx'
import Details from './Component/Page/Admin/AllOrders/Details.tsx'
import Privateroute from './Component/PrivateRoute/Privateroute.tsx'





const routes=createBrowserRouter([

  {
    path: '/', element:<MainHome/>,children:[

      {path: '/', element:<Home></Home>},
      {path: '/about', element:<About></About>},
      {path: '/track', element:<Tracking></Tracking>},
      {path: '/adlogin', element:<Adlogin/>},
    ]
  },
  {
    path:'/dashboard',element:( <Privateroute> <DashboardLayout/>, </Privateroute>),
    children:[
      {path: '/dashboard', element:<Dashboard></Dashboard>},
      {
        path: '/dashboard/orders',
        element: <Allorders></Allorders>
      },
      {path: '/dashboard/adorder', element:<AdOrder/>},
      {
        path: '/dashboard/details/:id', 
        loader :({params}) => fetch(`${process.env.REACT_APP_API_URL}/order/${params.id}`).then(res => res.json()), 
        element:<Details/>
      }

    ] 
  

  }
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes}>
    
   <App/> 
   </RouterProvider>
  </React.StrictMode>,
)
