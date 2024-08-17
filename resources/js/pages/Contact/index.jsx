
const Contact = () => {
    return (
        <div className="inner-page" >
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                </div >
            </section>
            <section className="description text-center accent-background">
                <div className="container">
                    <div className="text-wrapper">
                        <h2>
                            Ways to Contact us
                        </h2>
                        <p>
                            Our team is available Monday to Friday, 8am to 8pm AEST.
                            To contact the team use the form below or email us at ContactUs-Retail@vivaenergy.com.au
                            Use our Fuel Finder to locate a convenient Shell or Liberty service station.
                        </p>
                    </div>
                </div >
            </section >
            <section className="contact">
                <form className="contact-form">
                    <div className="input">
                        <div className="wrapper">
                            <label>Name:</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="wrapper">
                            <label>Email:</label>
                            <input type="email" name="email" />
                        </div>
                    </div>
                    <div className="textarea-wrapper">
                        <label>What would you like to tell us?</label>
                        <textarea type="textarea" rows="6" cols="50" name="message" />
                    </div>
                    <input className="button primary-button" type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default Contact