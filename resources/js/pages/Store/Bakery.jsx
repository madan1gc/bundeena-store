import { SectionHeader, Card, CTA } from "../../components"
import { useProductData } from '../../components/data'
import { cta } from '../../components/images'

const Bakery = () => {

    const data = useProductData();

    const bakery = data && data.stores && data.stores.Bakery
        ? data.stores.Bakery
            .filter(item => item.publish === 1)
            .reverse()
        : [];

    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Bistro Morgan Bakery Range
                        </h1>
                        <p>
                            Whether you’re looking for a sweet treat or a snack to enjoy with coffee, there’s something for everyone in our new Bistro Morgan range - including artisan doughnuts, cookies, muffins, banana bread and their famous cinnamon scrolls, which are all crafted locally by Morgan and his team. The range is available now at selected Victorian stores.
                        </p>
                    </div>
                </div >
            </section>
            <section className='offer'>
                <div className="container">
                    <SectionHeader
                        heading="Bistro Morgan Bakery Range"
                    />
                    <div className="card-wrapper">
                        <Card cardItem={bakery} />
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

export default Bakery