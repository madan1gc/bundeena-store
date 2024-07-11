import React, { useState, useEffect } from 'react';
import { Card, Carousel, SectionHeader, CTA } from '../../components';
import { cta } from '../../components/images'
import { sliderContent, offerCard, categoryList, serviceList } from '../../components/data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = '/api/product';
        axios.get(apiUrl)
            .then(response => {

                console.log(response.data);
                const dataList = [];
                Object.keys(response.data).forEach(categoryName => {
                    const category = response.data[categoryName];
                    category.forEach(item => {
                        dataList.push({
                            title: categoryName,
                            description: item.description,
                            price: item.price,
                            date: item.from_date,
                            end_date: item.to_date,
                            image: item.image,
                            categoryName: categoryName,
                            status: item.publish
                        });
                    });
                });
                setData(dataList);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    const fuel = data.filter(item => item.categoryName === "fuel" && item.status == true);
    const categoryOne = data.filter(item => item.categoryName === "category 1" && item.status == true);

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
                    <Tabs>
                        <TabList>
                            <Tab>Offer 1</Tab>
                            <Tab>Offer 2</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="card-wrapper">
                                <Card cardItem={fuel} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-wrapper">
                                <Card cardItem={categoryOne} />
                            </div>
                        </TabPanel>
                    </Tabs>

                    <div className="button-wrapper">
                        <a className='button primary-button' href="#">View all Offers</a>
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
                    <Carousel
                        sliderContent={serviceList}
                        style="horizontal"
                        slidesToShow={3}
                    />
                    <div className="button-wrapper">
                        <a className='button primary-button' href="#">View all Services</a>
                    </div>
                </div>
            </section>
            <section className='blog accent-background'>
                <div className="container">
                    <SectionHeader
                        heading="News and Events"
                        description="Latest updates and in-depth analysis on current events."
                    />
                    <div className="card-wrapper">
                        <Card cardItem={serviceList} />
                    </div>
                    <div className="button-wrapper">
                        <a className='button primary-button' href="#">View all Articles</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
