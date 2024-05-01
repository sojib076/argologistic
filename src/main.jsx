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
import Alladmin from './Component/Page/Admin/Alladmin/Alladmin.tsx'
import Details from './Component/Page/Admin/Alladmin/Details.tsx'





const routes=createBrowserRouter([

  {
    path: '/', element:<MainHome/>,children:[

      {path: '/', element:<Home></Home>},
      {path: '/about', element:<About></About>},
      {path: '/track', element:<Tracking></Tracking>},
      {path: '/dashboard/adlogin', element:<Adlogin/>},
     
    ]
  },
  {
    path:'/dashboard',element: <DashboardLayout/>,children:[
      {path: '/dashboard', element:<Dashboard></Dashboard>},
      {
        path: '/dashboard/admin',
        element: <Alladmin></Alladmin>
      },
      {path: '/dashboard/adorder', element:<AdOrder/>},
      {
        path: '/dashboard/details/:id', 
        loader :({params}) => fetch(`http://localhost:3000/api/v1/order/${params.id}`).then(res => res.json()), 
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
