import React from 'react';
import { Card, Carousel, SectionHeader, CTA } from '../../components';
import { bannerImage, cta } from '../../components/images'

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

    const categoryList = [
        {
            link: "#",
            image: bannerImage,
            name: "Fuel"
        },
        {
            link: "#",
            image: bannerImage,
            name: "Coffee"
        },
        {
            link: "#",
            image: bannerImage,
            name: "Food"
        },
        {
            link: "#",
            image: bannerImage,
            name: "Service"
        }
    ]

    const serviceList = [
        {
            title: "Car Wash",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            image: cta,
        },
        {
            title: "Car Wash",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            image: cta,
        },
        {
            title: "Car Wash",
            description: "Cadbury Medium Bar 30g - 60g varieties",
            image: cta,
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
                            {
                                categoryList.map((category, index) => (
                                    <a href={category.link} className="category" key={index}>
                                        <img src={category.image} />
                                        <span>{category.name}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className='cta'>
                <div className="container">
                    <CTA
                        image={cta}
                        heading="Service station near you"
                        description="Use our store finder to find your closest Coles Express and Reddy Express service stations"
                        link="#"
                        buttontext="Get in Touch"
                    />
                </div>
            </section>
            <section className='services'>
                <div className="container">
                    <SectionHeader
                        heading="Services"
                    />
                    <div className="card-wrapper">
                        <Card cardItem={serviceList} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
