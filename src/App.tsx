import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesContextProvider } from './contexts/CyclesContext'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={baseUrl}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
