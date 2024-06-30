import React from 'react';
import { Card, Carousel } from '../../components';
import { bannerImage } from '../../components/images'

const Home = () => {
    const sliderContent = [
        {
            title: "Fueling Your Future",
            description: "Discover the power of high-quality fuels that keep your engines running longer and cleaner. Join the thousands of satisfied customers who trust us for their fuel needs.",
            buttonText: "Learn More",
            link: "#",
            image: bannerImage,
        },
        {
            title: "Eco-Friendly Fuels",
            description: "Commit to a greener planet with our eco-friendly fuel options. Reduce emissions and protect the environment without compromising performance.",
            buttonText: "Explore More",
            link: "#",
            image: bannerImage,
        },
    ];

    const offerCard = [
        {
            title: "Eco-Friendly Fuels",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            date: "Offer valid from: 30/05/2024 - 03/07/2024",
            image: bannerImage,
        },
        {
            title: "Eco-Friendly Fuels",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            date: "Offer valid from: 30/05/2024 - 03/07/2024",
            image: bannerImage,
        },
        {
            title: "Eco-Friendly Fuels",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            date: "Offer valid from: 30/05/2024 - 03/07/2024",
            image: bannerImage,
        },
    ]

    return (
        < >
            <section className="slider-banner">
                <div className="container">
                    <Carousel
                        sliderContent={sliderContent}
                        style="vertical"
                        slidesToShow={1}
                    />
                </div>
            </section>
            <section className='offer'>
                <div className="container">
                    <div className="section-header">
                        <h2>This month Offer's</h2>
                        <p>Every month you can find different offers and deals at Coles Express and Reddy Express stores</p>
                    </div>
                    <div className="card-wrapper">
                        <Card cardItem={offerCard} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
