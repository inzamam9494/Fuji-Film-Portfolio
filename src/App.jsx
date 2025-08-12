import { useMediaQuery } from 'react-responsive'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <>
      {isDesktop && (
        <div style={{fontFamily: 'My Custom Font'}}>
          
        </div>
      )}

      {isMobile && (
        <div>
          <h1>Welcome to the Mobile Version</h1>
        </div>
      )}
    </>
  )
}

export default App
