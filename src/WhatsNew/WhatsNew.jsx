import React from 'react'

const WhatsNew = (props) => {
    return (
        <div>
            The WhatsNew page
            
            <article>
            <h1>{props.content.title}</h1>
            <address>Author: {props.content.author}</address>
            <p>{props.content.text}</p>
            </article>
        </div>
    )
}

export default WhatsNew
