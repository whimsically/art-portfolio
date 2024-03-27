//routing
import { useLocation, useOutlet, } from 'react-router-dom';
import { routes } from './routes.jsx'

//components
import Header from './components/Header'
import Nav from './components/Nav.jsx'

//transitions
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function App() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <Header />
      <Nav />
      <main className='bg-indigo-100 rounded shadow-md w-9/12 border-2 border-indigo-300 mx-auto p-6 h-2/3'>
      <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
      </main>
    </>
  )
}

export default App
