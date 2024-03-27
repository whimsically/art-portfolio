import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//supabase
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';

import App from './App.jsx'
import './index.css'
import { routes } from './routes.jsx'
import Error from './pages/Error.jsx'

const supabase = createClient("https://pgvxgewnnneysnzoijsp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndnhnZXdubm5leXNuem9panNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0MTg5MDgsImV4cCI6MjAyNjk5NDkwOH0.Lb_BtJEceveC8fJytQX49MCLObNKA1rZ9JI1Ol2HXqY");

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  </React.StrictMode>,
)
