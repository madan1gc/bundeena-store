import { CardTwo, Card, CTA } from "../../components"
import { carwash, serviceListTwo } from '../../components/data'
import { cta } from '../../components/images'

const Services = () => {
    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Coles Express Car Wash
                        </h1>
                    </div>
                </div >
            </section>
            <section className="description text-center">
                <div className="container">
                    <div className="text-wrapper">
                        <h2>
                            Automatic or Self-Service Car Wash
                        </h2>
                        <p>
                            For fast, safe and easy car washing find your nearest Coles Express or Reddy Express Automatic Car Wash. We offer automated drive through as well as touchless and manual self-service car wash facilities at various Coles Express and Reddy Express locations. In addition, we have everything else you need for a sparkly clean car such as vacuums and interior cleaning supplies.
                        </p>
                        <p>
                            For fast, safe and easy car washing find your nearest Coles Express or Reddy Express Automatic Car Wash. We offer automated drive through as well as touchless and manual self-service car wash facilities at various Coles Express and Reddy Express locations. In addition, we have everything else you need for a sparkly clean car such as vacuums and interior cleaning supplies.
                        </p>
                    </div>
                </div >
            </section >
            <section className="services accent-background">
                <div className="container">
                    <CardTwo cardItem={carwash} />
                </div>
            </section>
            <section className="services two">
                <div className="container">
                    <div className="card-wrapper">
                        <Card cardItem={serviceListTwo} />
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

export default Services