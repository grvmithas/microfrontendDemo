import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'
const mount = (el, { onNavigate = () => { }, localHistory, initialPath }) => {
    console.log(localHistory, "localHistory")
    const history = localHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    history.listen(onNavigate)
    ReactDOM.render(<App history={history} />, el)
    return {
        onParentNavigate({ pathname: nextPathName }) {
            console.log("on history Navigate", nextPathName)
            if (history.location.pathname !== nextPathName) {
                history.push(nextPathName)
            }
        }
    }
}
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const localMktingRoot = document.querySelector('#_marketing-dev-root')
    if (localMktingRoot) {
        mount(localMktingRoot, { localHistory: createBrowserHistory(), initialPath: '/' })
    }

}
// We are running through container
// and we should export the mount function
export { mount }

