import React from 'react';
import { Card, Carousel, SectionHeader } from '../../components';
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
                    <SectionHeader
                        heading="This month Offer's"
                        description="Every month you can find different offers and deals at Coles Express and Reddy Express stores"
                    />
                    <div className="card-wrapper">
                        <Card cardItem={offerCard} />
                    </div>
                </div>
            </section>
            <section className='category accent-background'>
                <div className="container">
                    <SectionHeader
                        heading="Search by category"
                    />
                    <div className="category-wrapper">
                        <div className="grid column-4">
                            <a href='#' className="category">
                                <img src={bannerImage} />
                                <span>Fuel</span>
                            </a>
                            <a href='#' className="category">
                                <img src={bannerImage} />
                                <span>Coffee</span>
                            </a>
                            <a href='#' className="category">
                                <img src={bannerImage} />
                                <span>Food</span>
                            </a>
                            <a href='#' className="category">
                                <img src={bannerImage} />
                                <span>Service</span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;
