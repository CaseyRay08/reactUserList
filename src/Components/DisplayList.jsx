import React from 'react'
import { ListItem } from './ListItem'
import './Styles/List.css'


export const DisplayList = (props) => {

    return (
        <div className='users'>
            <ul>

                {props.items.map((item) => (
                    <ListItem
                        key={item.id}
                        username={item.username}
                        age={item.age}
                    />
                ))
                }
            </ul>
        </div>
    )


}
