/* eslint-disable no-unused-vars */
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { StoreProvider } from '../utils/Store'
import { Provider } from 'react-redux'
import store from '../tool/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <Provider store={store}>
        <StoreProvider>
          <div className="dark:bg-medium dark:text-white">
            <Component {...pageProps} />
          </div>
        </StoreProvider>
      </Provider>
  )
}

export default MyApp
