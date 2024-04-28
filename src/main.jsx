import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Page/Home/Home.jsx'
import About from './Component/Page/About/About.jsx'
import MainHome from './Component/Layout/MainHome.jsx'
import Tracking from './Component/Page/Tracking/Tracking.tsx'




const routes=createBrowserRouter([
  // {path: '/', element: <Home/>, children: [
  //   {path: '/about', element:<About></About> },
  //   {path: '/contact', element: <div>Contact</div>}
  
  // ]}
  {
    path: '/', element:<MainHome/>,children:[

      {path: '/', element:<Home></Home>},
      {path: '/about', element:<About></About>},
      {path: '/track', element:<Tracking></Tracking>}
     
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
