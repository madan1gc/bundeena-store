import { SectionHeader, Card, CTA } from "../../components"
import { serviceList } from '../../components/data'
import { cta } from '../../components/images'

const AllStore = () => {
    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Convenience Products available at Coles Express and Reddy Express
                        </h1>
                        <p>
                            We have a wide range of convenience products available in-store. You can find a variety of drinks, including freshly ground hot and iced coffee, Frozen Coke and bottled cold drinks. Our food options include sandwiches, hot pies, banana bread, ice cream and other sweet and savoury snacks. Coles Express and Reddy Express convenience stores are your one-stop shop to stock up on groceries and household essentials, swap SodaStream cylinders or pick up firewood and ice bags. Our product range at also includes an extensive range of Shell branded engine oils and lubricants to keep your vehicles well maintained.
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
                    <div className="card-wrapper">
                        <Card cardItem={serviceList} />
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
        </div>
    )
}

export default AllStore