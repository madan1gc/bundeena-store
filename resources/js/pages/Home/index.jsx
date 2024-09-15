import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, Carousel, CTA, SectionHeader } from '../../components';
import { categoryList, serviceList, sliderContent, useProductData } from '../../components/data';
import { cta } from '../../components/images';
const Home = () => {

    const data = useProductData();

    const categoryOne = data && data.offers && data.offers.specials
        ? data.offers.specials
            .filter(item => item.publish === 1)
            .slice(-3)
            .reverse()
        : [];

    const categoryTwo = data && data.offers && data.offers.specials
        ? data.offers.twofor
            .filter(item => item.publish === 1)
            .slice(-3)
            .reverse()
        : [];

    const price = data && data.fuels

    return (
        < >
            <section className="slider-banner">
                <div className="container">
                    <Carousel
                        sliderContent={sliderContent}
                        style="vertical"
                        slidesToShow={1}
                    />
                    <div className="fuel-wrapper">
                        {
                            price && price.map((item, index) => (
                                <div key={index} className="fuel-itemprice">
                                    <span>{item.title}</span>
                                    <span>{item.price}</span>
                                </div>
                            ))
                        }
                    </div>
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
                            <Tab>Specials</Tab>
                            <Tab>2 For</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="card-wrapper">
                                <Card cardItem={categoryOne} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-wrapper">
                                <Card cardItem={categoryTwo} />
                            </div>
                        </TabPanel>
                    </Tabs>

                    <div className="button-wrapper">
                        <a className="button primary-button" href="/offers">View all Offers</a>
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
                        <a className='button primary-button' href="/services">View all Services</a>
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
