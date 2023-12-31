import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/other">Other</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <Outlet />
        </div>
    )
}
