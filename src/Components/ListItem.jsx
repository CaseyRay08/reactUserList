import React from 'react'
import './Styles/List.css'
export const ListItem = (props) => {

    return (
        <div className='users'>
            <li >
                <div >{props.username} ({props.age} years old)</div>

            </li>
        </div>
    )
}
