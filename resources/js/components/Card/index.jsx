import React from 'react'

const Card = ({cardItem}) => {
    return (
        cardItem.map((item, index) => (
            <div className="card" key={index}>
                <div className="image">
                    <img src={item.image} alt="" />
                </div>
                <div className="text">
                    <p>{item.description}</p>
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                </div>
            </div>
        ))
    )
}

export default Card