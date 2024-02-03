import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './Components/Main.jsx'
import Bag from './Components/Bag.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/', element:<Main/>},
    {path:'/Bag',element:<Bag/>}

  ]

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
