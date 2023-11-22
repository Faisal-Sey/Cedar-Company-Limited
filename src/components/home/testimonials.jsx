
// import OwlCarousel from 'react-owl-carousel2';


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
                            <h2>What they say <em>about us</em></h2>
                            <span>testimonials from our greatest clients</span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Slider {...slickSettings}>
                            {/*<OwlCarousel {...testimonialsOptions}>*/}
                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>George Walker</h4>
                                        <span>Chief Financial Analyst</span>
                                        <p>"Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem sit amet quam. Pellentesque in sagittis lacus."</p>
                                    </div>
                                    <img src="http://placehold.it/60x60" alt=""/>
                                </div>

                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>John Smith</h4>
                                        <span>Market Specialist</span>
                                        <p>"In eget leo ante. Sed nibh leo, laoreet accumsan euismod quis, scelerisque a nunc. Mauris accumsan, arcu id ornare malesuada, est nulla luctus nisi."</p>
                                    </div>
                                    <img src="http://placehold.it/60x60" alt=""/>
                                </div>

                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>David Wood</h4>
                                        <span>Chief Accountant</span>
                                        <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
                                    </div>
                                    <img src="http://placehold.it/60x60" alt=""/>
                                </div>

                                <div className="testimonial-item">
                                    <div className="inner-content">
                                        <h4>Andrew Boom</h4>
                                        <span>Marketing Head</span>
                                        <p>"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."</p>
                                    </div>
                                    <img src="http://placehold.it/60x60" alt=""/>
                                </div>
                            {/*</OwlCarousel>*/}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}