import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'
//exporting mount function from marketing/src/bootstrap.js because a
// a react component will be framework specific, we want to keep it framework agnostic
export default function MarketingApp() {
    const marketingRef = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const onNavigate = ({ pathname: nextPathName }) => {
            if (nextPathName !== history.location.pathname) {
                history.push(nextPathName)
            }
        }
        const { onParentNavigate } = mount(marketingRef.current, {
            onNavigate,
            initialPath: history.location.pathname
        })
        history.listen(onParentNavigate)
    }, [])

    return (
        <main>
            <div ref={marketingRef}></div>
        </main>

    )
}
