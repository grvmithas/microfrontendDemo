import React, { useRef, useEffect } from 'react'
import { mount } from 'dashboard/DashboardApp'

//exporting mount function from marketing/src/bootstrap.js because a
// a react component will be framework specific, we want to keep it framework agnostic
export default function MarketingApp() {
    const dashboardRef = useRef(null)


    useEffect(() => {
        mount(dashboardRef.current)
    }, [])

    return (
        <main>
            <div ref={dashboardRef}></div>
        </main>

    )
}
