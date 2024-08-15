import { SectionHeader, Card, CTA } from "../../components"
import { useProductData } from '../../components/data'
import { cta } from '../../components/images'

const Sandwitch = () => {

    const data = useProductData();

    const sandwiches = data && data.stores && data.stores.Sandwiches
        ? data.stores.Sandwiches
            .filter(item => item.publish === 1)
            .reverse()
        : [];

    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Sandwiches & Wraps at Coles Express
                        </h1>
                        <p>
                            Try our delicious range of sandwiches and wraps! All of our wraps and sandwiches are hand-made with quality ingredients, and lunch ready for you at Coles Express and Reddy Express. Try our range of chicken sandwiches or wraps including our famous chicken caesar wrap prepared with RSPCA approved chicken, a roast beef sandwich or explore our vegetarian sandwich & wrap options. Visit your nearest Coles Express or Reddy Express store or conveniently order your favourite lunch deals through the DoorDash App.
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
                        <Card cardItem={sandwiches} />
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

export default Sandwitch