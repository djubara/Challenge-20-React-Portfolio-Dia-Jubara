import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from './assets/projectsDesc.js';

// components
import App from './App.jsx'
import PortfolioGallery from './PortfolioGallery.jsx'

// page components
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <AboutMePage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'resume',
          element: <ResumePage />,
        },
        {
          path: 'portfolio',
          element: <PortfolioPage />,
          children: [
            {
              path: '',
              element: <PortfolioGallery />,
            },
            ...projects.map((project) => {
              return {
                path: project.urlName,
                element: <ProjectPage project={project} />,
              }
            })
          ]
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
