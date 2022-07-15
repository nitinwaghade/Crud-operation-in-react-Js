import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
    return (
        <div>
            <h1>not found</h1>
           <NavLink to="/">go back</NavLink>
        </div>
    )
}

export default Notfound
