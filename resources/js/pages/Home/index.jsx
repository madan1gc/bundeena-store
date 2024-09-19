import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Card, Carousel, CTA, SectionHeader } from '../../components';
import { categoryList, serviceList, sliderContent, useProductData } from '../../components/data';
import { cta } from '../../components/images';
const Home = () => {

    const data = useProductData();

    const price = data && data.fuels
   
    const [showPrice, setShowPrice] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowPrice(false);
            } else {
                setShowPrice(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const handlePriceClick = () => {
        setShowPrice(!showPrice)
    }
    const handlePriceClose = () => {
        setShowPrice(false)
    }

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
                        {showPrice == true ?
                            <div className="price-wrapper">
                                <button className='close' onClick={handlePriceClose}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.782 4.0319C11.8355 3.97852 11.8779 3.91513 11.9068 3.84536C11.9358 3.77559 11.9507 3.7008 11.9508 3.62525C11.9508 3.54971 11.936 3.4749 11.9071 3.4051C11.8782 3.33529 11.8359 3.27185 11.7825 3.2184C11.7291 3.16495 11.6658 3.12254 11.596 3.09359C11.5262 3.06464 11.4514 3.04972 11.3759 3.04967C11.3003 3.04962 11.2255 3.06446 11.1557 3.09332C11.0859 3.12219 11.0225 3.16452 10.969 3.2179L7.50002 6.6869L4.03202 3.2179C3.92408 3.10996 3.77768 3.04932 3.62502 3.04932C3.47237 3.04932 3.32597 3.10996 3.21802 3.2179C3.11008 3.32584 3.04944 3.47225 3.04944 3.6249C3.04944 3.77756 3.11008 3.92396 3.21802 4.0319L6.68702 7.4999L3.21802 10.9679C3.16458 11.0213 3.12218 11.0848 3.09325 11.1546C3.06433 11.2245 3.04944 11.2993 3.04944 11.3749C3.04944 11.4505 3.06433 11.5253 3.09325 11.5952C3.12218 11.665 3.16458 11.7285 3.21802 11.7819C3.32597 11.8898 3.47237 11.9505 3.62502 11.9505C3.70061 11.9505 3.77546 11.9356 3.84529 11.9067C3.91512 11.8777 3.97858 11.8353 4.03202 11.7819L7.50002 8.3129L10.969 11.7819C11.077 11.8897 11.2233 11.9502 11.3759 11.9501C11.5284 11.95 11.6747 11.8893 11.7825 11.7814C11.8903 11.6735 11.9508 11.5271 11.9508 11.3745C11.9507 11.222 11.89 11.0757 11.782 10.9679L8.31302 7.4999L11.782 4.0319Z" fill="currentColor" />
                                </svg>
                                </button>
                                {price && price.map((item, index) => (
                                    <div key={index} className="fuel-itemprice">
                                        <span className='title'>{item.title}</span>
                                        <span className='price' >{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            : <div className='icon' onClick={handlePriceClick}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.503 33.545C28.7525 33.5106 29.0065 33.5312 29.2472 33.6052C29.488 33.6792 29.7096 33.8048 29.8968 33.9734C30.0839 34.1419 30.232 34.3493 30.3306 34.5811C30.4293 34.8128 30.4762 35.0632 30.468 35.315L30.625 38.882C30.6205 39.0843 30.658 39.2853 30.735 39.4724C30.812 39.6595 30.927 39.8287 31.0726 39.9692C31.2182 40.1097 31.3913 40.2186 31.581 40.289C31.7707 40.3593 31.973 40.3896 32.175 40.378C32.5592 40.3554 32.9207 40.1889 33.1876 39.9116C33.4545 39.6344 33.6071 39.2667 33.615 38.882C33.607 36.599 33.615 32.559 33.615 29.787L30.239 26.177M28.503 41.117V27.38C28.5027 26.7714 28.2609 26.1878 27.8305 25.7574C27.4002 25.3271 26.8166 25.0852 26.208 25.085H21.618C21.0097 25.0858 20.4265 25.3278 19.9964 25.7581C19.5664 26.1883 19.3245 26.7716 19.324 27.38V41.118L28.503 41.117ZM26.303 27.522H21.524V31.728H26.303V27.522Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M33.615 30.1571C33.6142 30.4267 33.5279 30.6891 33.3685 30.9065C33.2091 31.124 32.9848 31.2852 32.7279 31.3671C32.471 31.449 32.1948 31.4473 31.939 31.3622C31.6831 31.2771 31.4609 31.113 31.3042 30.8936C31.1475 30.6742 31.0645 30.4107 31.0671 30.1411C31.0696 29.8715 31.1577 29.6097 31.3185 29.3933C31.4793 29.1769 31.7047 29.0171 31.9621 28.9369C32.2195 28.8567 32.4957 28.8603 32.751 28.9471M3.71 16.8781C17.608 23.1251 31.137 23.1731 44.29 16.8781" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 45.5C35.8741 45.5 45.5 35.8741 45.5 24C45.5 12.1259 35.8741 2.5 24 2.5C12.1259 2.5 2.5 12.1259 2.5 24C2.5 35.8741 12.1259 45.5 24 45.5Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 21.581L19.78 9.50101M24 5.88501V8.57301M36.79 11.183L34.89 13.083M11.21 11.183L13.11 13.083" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        }

                    </div>
                </div>
            </section >
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
