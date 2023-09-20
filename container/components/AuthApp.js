import React, { useRef, useEffect } from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'
//exporting mount function from auth/src/bootstrap.js because a
// a react component will be framework specific, we want to keep it framework agnostic
export default function AuthApp({ onSignIn }) {
    const authRef = useRef(null)
    const history = useHistory()

    const onNavigate = ({ pathname: nextPathName }) => {
        if (nextPathName !== history.location.pathname) {
            history.push(nextPathName)
        }
    }

    useEffect(() => {
        const { onParentNavigate } = mount(authRef.current, {
            onSignIn,
            onNavigate,
            initialPath: history.location.pathname
        })
        history.listen(onParentNavigate)
    }, [])

    return (
        <main>
            <div ref={authRef}></div>
        </main>

    )
}
