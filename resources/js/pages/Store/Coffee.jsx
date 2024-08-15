import { SectionHeader, Card, CTA } from "../../components"
import { useProductData } from '../../components/data'
import { cta } from '../../components/images'

const Coffee = () => {

    const data = useProductData();

    const coffee = data && data.stores && data.stores.Coffee
        ? data.stores.Coffee
            .filter(item => item.publish === 1)
            .reverse()
        : [];

    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Coffee to Go
                        </h1>
                        <p>
                            Our quality coffee beans are batch roasted in Melbourne and freshly ground in-store. Customise your coffee strength and choose from hot or iced. For something different, try our creamy hot chocolate or chai latte. Why not pair your drink of choice with one of our delicious treats, like a muffin or banana bread today!
                        </p>
                    </div>
                </div >
            </section>
            <section className='offer'>
                <div className="container">
                    <SectionHeader
                        heading="Sandwiches Full Range"
                    />
                    <div className="card-wrapper">
                        <Card cardItem={coffee} />
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

export default Coffee