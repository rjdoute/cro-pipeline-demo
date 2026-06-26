import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { WorldScreen } from './world/WorldScreen'
import { EpisodeScreen } from './engine/EpisodeScreen'
import { AppLayout } from './world/AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <WorldScreen /> },
      { path: '/episode/:episodeId', element: <EpisodeScreen /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
