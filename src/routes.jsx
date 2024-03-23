import { createRef } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Upload from './pages/Upload'

export const routes = [
    { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
    { path: '/portfolio', name: 'Portfolio', element: <Portfolio />, nodeRef: createRef(), },
    { path: '/upload', name: 'Resume', element: <Upload />, nodeRef: createRef(), },
    { path: '/contact', name: 'Contact', element: <Contact />, nodeRef: createRef(), },
  ]