import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/AboutMePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio.jsx'
import Contact from './pages/ContactPage.jsx'
import Resume from './pages/ResumePage.jsx'
import App from './App.jsx'


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',

          element: <AboutMe />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,

        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/resume',
          element: <Resume />,
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
