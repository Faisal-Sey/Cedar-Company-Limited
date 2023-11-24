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
                                            He is a young man who have been in the inspection field for a year now
                                            and knows what entails in that field. He has work with GPD Oilfield Alliance,
                                            Omni energy and other companies. He is a person who pays attention to ideas
                                            generate and greatly consider details of issues. A confident person with zeal
                                            to achieve nothing but excellence. He is an agile Business, project scheduling
                                            and cost control. His joy is to maximise the potential of people and
                                            organizations. He is someone who take delight in business development,
                                            team development and pursue sustainable growth of businesses.
                                        </p>
                                        <p>Contact: +233 (0) 24 626 3191</p>
                                        <p>Email: cedarcompanylimited@gmail.com / ericnanaantwi97@gmail.com</p>
                                    </div>
                                    <img src={CEOImage} alt=""/>
                                </div>

                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Richard Okyere Taylor</h4>
                                        <span>Operation Manager</span>
                                        <p>
                                            He has been in the inspection field since 2008. He is a man of many
                                            languages. He speaks English, French, German, Spanish, and Italian. He
                                            started his inspection career with NDU tuboscope and spent 8years with
                                            them and later moved to Uniarn, GRD Oilfield Alliance, Omni Energy
                                            respectively. He is a person who loves to motivate, support a large team
                                            within a time-sensitive and demanding environment, including career
                                            development plans for direct reports and resolution.
                                        </p>
                                        <p>Contact: +233 (0) 54 307 1604 / +233 (0) 54 279 5520</p>
                                        <p>Email: cedarcompanylimited7@gmail.com</p>
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