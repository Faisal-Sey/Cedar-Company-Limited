import CEOImage from "../../assets/images/team/ceo.jpg";
import OperatorImage from "../../assets/images/team/operator.jpg";


import Slider from "react-slick";

export default function () {
    const PrevArrow = (props) => <button {...props} className="PrevArrow"></button>;
    const NextArrow = (props) => <button {...props} className="NextArrow"></button>;

    const slickSettings = {
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade: true,
        draggable: false,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    };

    return (
        <div className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Cedar Company Limited <em>(CCL)</em> Leadership</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Slider {...slickSettings}>
                            {/*<OwlCarousel {...testimonialsOptions}>*/}
                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Eric Nana Antwi-Boasiako Addo</h4>
                                        <span>CEO / Managing Director</span>
                                        <p>
                                            He is a young Ghanaian man who have been in the oil inspection
                                            field for years now and knows what entails in that field.
                                            He has work with GRO Oilfield Alliance,Omni energy and a
                                            freelance on different kinds of projects for different companies.
                                            In a year 2023 he was part of NDT team which perform NDT on Fabrication of
                                            splitter manifold and suction pile and the project is for Tullow and
                                            contracted by Trendetter and Wayoe Engineering and Construction.
                                            He has adequate knowledge on Non-destructive Testing(NDT) and Oil County
                                            Tubular Goods(OCTG) inspection.He is a person  who pays attention to ideas
                                            generate and greatly consider details of issues. Antwi-Boasiako is a
                                            confident person with zeal to achieve nothing but excellence.
                                            He is agile to Business , project scheduling and cost control.
                                            His joy is to maximize the potential of people and organizations.
                                            He is someone who take delight in business development, team development
                                            and pursue sustainable growth of businesses .
                                        </p>
                                        <p>Contact: +233 (0) 24 626 3191 / +233 (0) 50 062 9069</p>
                                        <p>Email: ericnanaantwi97@cedarcompanylimited.com / ericnanaantwi97@gmail.com</p>
                                    </div>
                                    <img src={CEOImage} alt=""/>
                                </div>

                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Richard Okyere Taylor</h4>
                                        <span>Operations Manager</span>
                                        <p>
                                            He is a vibrant Ghana man who lived most of is youthful life in Europe.
                                            He is a man of many languages. He speaks English, French, German, Spanish
                                            and italian. He was introduced to the oil inspection field since 2008.
                                            He started his inspection career with National Oil Varco (NOV) Turboscop and
                                            spent 8years with them and later moved to Unicorn, GRO Oilfield Alliance
                                            and Omni energy respectively.He has work on both offshore and onshore
                                            with different rigs like Transocean, Olympia, and etc.
                                            He is a person who love to motivate, support a large team within a
                                            time-sensitive and demanding environment, including career development
                                            plans for direct reports and resolutions.
                                        </p>
                                        <p>Contact: +233 (0) 54 307 1604 / +233 (0) 54 279 5520</p>
                                        <p>Email: richard.okyere@cedarcompanylimited.com</p>
                                    </div>
                                    <img src={OperatorImage} alt=""/>
                                </div>

                            {/*</OwlCarousel>*/}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}