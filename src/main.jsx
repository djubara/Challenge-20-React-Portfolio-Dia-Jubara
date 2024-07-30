import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './AboutMe.jsx'
import Header from './Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Resume from './Resume.jsx'


const router = createBrowserRouter(
  [
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
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
