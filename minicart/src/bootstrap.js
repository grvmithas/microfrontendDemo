import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'
const mount = (el, { isOpen }) => {
    ReactDOM.render(<App history={history} isOpen={isOpen} />, el)
}
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const localMinicartRoot = document.querySelector('#__minicart-dev-root')
    if (localMinicartRoot) {
        mount(localMinicartRoot, { localHistory: createBrowserHistory(), isOpen: false })
    }

}
// We are running through container
// and we should export the mount function
export { mount }

