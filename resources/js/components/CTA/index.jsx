import React from 'react'

const CTA = ({ heading, description, link, buttontext, image }) => {
    return (
        <div className='cta-wrapper'>
            <div className="image">
                {image && <img src={image} />}
            </div>
            <div className="text">
                {heading && <h3>{heading}</h3>}
                {description && <p>{description}</p>}
                {buttontext && <a className='button primary-button' href={link}>{buttontext} </a>}
            </div>

        </div>
    )
}

export default CTA