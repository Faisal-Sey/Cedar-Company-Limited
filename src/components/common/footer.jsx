import Logo from "../../assets/images/logo.png";


export default function () {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-item">
                            <img src={Logo} alt="" className="logo-image" />
                            <p>
                                Drawing on extensive inspection experience and international standards,
                                we offer clients top-tier personnel, modern equipment, and efficient
                                coordination via our web-based platform.
                            </p>
                            <ul className="social-icons">
                                <li>
                                    <a
                                        rel="nofollow"
                                        href="https://fb.com/templatemo"
                                        target="_blank"
                                    >
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Services</h4>
                            <ul className="menu-list">
                                <li>
                                    <a href="#">Integrity Management</a>
                                </li>
                                <li>
                                    <a href="#">Advanced NDT</a>
                                </li>
                                <li>
                                    <a href="#">OCTG Inspection Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item">
                            <h4>Additional Pages</h4>
                            <ul className="menu-list">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">How We Work</a>
                                </li>
                                <li>
                                    <a href="#">Quick Support</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-item last-item">
                            <h4>Contact Us</h4>
                            <div className="contact-form">
                                <form id="contact footer-contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Full Name"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    placeholder="E-Mail Address"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                    <textarea
                        name="message"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required=""
                        defaultValue={""}
                    />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button
                                                    type="submit"
                                                    id="form-submit"
                                                    className="filled-button"
                                                >
                                                    Send Message
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                Copyright © {new Date().getFullYear()} Cedar Company Ltd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}