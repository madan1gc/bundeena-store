import React from 'react'

const SectonHeader = ({ heading, description }) => {
    return (
        <div className="section-header">
            {heading && <h2>{heading}</h2>}
            {description && <p>{description}</p>}
        </div>
    )
}

export default SectonHeader
