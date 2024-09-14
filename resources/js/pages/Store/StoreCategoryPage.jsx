import { useParams } from "react-router-dom";
import { Card, CTA } from "../../components";
import { useProductData } from '../../components/data';
import { cta } from '../../components/images';
const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
const unslugify = (slug) => {
    const data = useProductData();
    const storeNames = Object.keys(data?.stores || {});
    return storeNames.find((name) => slugify(name) === slug) || slug;
};

const StoreCategoryPage = () => {
    const { category: categorySlug } = useParams();
    const data = useProductData();
    const originalCategoryName = unslugify(categorySlug);

    const storeData = data?.stores?.[originalCategoryName] || [];

    const filteredItems = storeData.filter(item => item.publish === 1).reverse();

    return (
        <div className="inner-page">
            <section className="banner">
                <div className="container">
                    <div className="text-wrapper">
                        {/* Display the original category name with correct capitalization */}
                        <h1 className="category-title">{originalCategoryName}</h1>
                    </div>
                </div>
            </section>
            <section className='offer'>
                <div className="container">
                    <div className="card-wrapper">
                        <Card cardItem={filteredItems} />
                    </div>
                </div>
            </section>
            <section className='cta'>
                <div className="container">
                    <CTA
                        image={cta}
                        heading="Service station near you"
                        description="Use our store finder to find your closest service stations"
                        link="#"
                        buttontext="Get in Touch"
                    />
                </div>
            </section>
        </div>
    );
};

export default StoreCategoryPage;
