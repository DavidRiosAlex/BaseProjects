import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootRouter } from './routes'
import { ThemeUIProvider } from './contexts/ThemeUI'
import { reduxStore } from './configurations'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from '@mui/material'
import theme from '../commons/mui/theme'

function App() {
  return (
    /* replace fallback with real page error, or redirect. */
    <ErrorBoundary fallback={<h1>Error!</h1>}>
      <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <ThemeUIProvider>
            <RouterProvider router={rootRouter} />
          </ThemeUIProvider>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  )
  
}

export default App
