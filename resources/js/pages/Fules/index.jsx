import { SectionHeader, Card, CTA } from "../../components"
import { useProductData } from '../../components/data'
import { cta } from '../../components/images'

const Fules = () => {

    const data = useProductData();

    const fules = data && data.fuels && data.fuels.fuel
        ? data.fuels.fuel
            .filter(item => item.publish === 1)
            .reverse()
        : [];

        console.log(fules);

    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Coles Express Fuel Discount Vouchers
                        </h1>
                        <p>
                            We work closely with our partners at Shell to provide you with quality fuels across Australia.
                        </p>
                    </div>
                </div >
            </section>
            <section className='offer'>
                <div className="container">
                    <SectionHeader
                        heading="Current Fuel Promotions"
                        description="Get more from your fuel purchase"
                    />
                    <div className="card-wrapper">
                        <Card cardItem={fules} />
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

export default Fules