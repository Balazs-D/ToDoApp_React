import React from 'react'

export default function Item(props) {
    
    return (
        <ul>
            {props.items.map((i, id )=> <li key={id}>{i}</li>)}       
        </ul>
    )
}
