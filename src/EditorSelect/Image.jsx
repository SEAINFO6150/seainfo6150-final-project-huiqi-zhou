import React from 'react'

const Image = ({imageLink, imageAlt}) => {
    return (
        <div>
            <img src={imageLink} alt={imageAlt} />
        </div>
    )
}

export default Image