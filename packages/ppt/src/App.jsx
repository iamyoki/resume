import { Global } from '@emotion/react'
import React from 'react'
import Providers from './components/Providers'
import globalCss from './global.css'
import Routes from './Routes'

function App() {
  return (
    <Providers>
      <Global styles={globalCss} />
      <Routes />
    </Providers>
  )
}

export default App
