import React, { useRef, useEffect } from 'react'
import { mount } from '../../marketing/src/bootstrap'
//exporting mount function from marketing/src/bootstrap.js because a
// a react component will be framework specific, we want to keep it framework agnostic
export default function MarketingApp() {
    const marketingRef = useRef(null)

    useEffect(() => {
        mount(marketingRef.current)
    }, [])

    return (
        <div ref={marketingRef}>Marketing Prod App</div>

    )
}
