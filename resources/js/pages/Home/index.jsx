import React from 'react';
import Carousel from '../../components/Carousel';
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

    return (
        < >
            <div className="slider-banner">
                <div className="container">
                    <Carousel
                        sliderContent={sliderContent}
                        style="vertical"
                        slidesToShow={1}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
