import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import HomePage from './routes/HomePage.jsx'
import {Provider} from 'react-redux';
import myntraStore from './store/index.js'

const router = createBrowserRouter([
{  path: '/',
  element : <App/>,
  children :  [{
    path : '/',
    element : <HomePage/>
  },
  {
    path : '/Bag',
    element : <Bag/>
  }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {myntraStore}>
    <RouterProvider router = {router}/>
    </Provider>
   
  </StrictMode>
)
