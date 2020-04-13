import React from 'react'

const Image = ({imageLink, category}) => {
    return (
        <div>
            <img src={imageLink} alt={category} />
        </div>
    )
}

export default Image