import { SectionHeader, Card, CTA } from "../../components"
import { offerCard, serviceList } from '../../components/data'
import { cta } from '../../components/images'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Offers = () => {
    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            This month's offers and deals at Coles Express
                        </h1>
                        <p>
                            At Coles Express and Reddy Express you can find monthly offers, deals and discounts on a variety of different convenience groceries. From grocery essentials to combos and meal deals, there is a range of special offers available to suit your taste. Discover which offers you can find at your nearest Coles Express and Reddy Express.
                        </p>
                    </div>
                </div >
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
                                <Card cardItem={offerCard} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card-wrapper">
                                <Card cardItem={serviceList} />
                            </div>
                        </TabPanel>
                    </Tabs>
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
        </div>
    )
}

export default Offers