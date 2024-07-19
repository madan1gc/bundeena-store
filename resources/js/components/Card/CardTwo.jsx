const CardTwo = ({ cardItem }) => {
    return (
        cardItem.map((item, index) => (
            <div className="card-two" key={index}>
                <div className="image">
                    <img src={item.image} alt="" />
                </div>
                <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <ul>
                        {item.list.map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))
    )
}

export default CardTwo