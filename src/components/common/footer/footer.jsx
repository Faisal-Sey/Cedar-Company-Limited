import Logo from "../../../assets/images/logo.png";


export default function () {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-item">
                            <img src={Logo} alt="" className="logo-image"/>
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
                                        <i className="fa fa-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance"/>
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
                                <li>
                                    <a href="#">Lifting Inspection</a>
                                </li>
                            </ul>
                            <br/><br/>
                            <h4>Languages we operate with</h4>
                            <ul className="menu-list">
                                <p>English, Spanish, German, French, Italian.</p>
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
                            <ul className="menu-list">
                                <li>
                                    <span>Location:</span><br/>
                                    <a>Takoradi-West Tanakrom,
                                        Western Region-Ghana, West Africa</a>
                                </li>
                                <li>
                                    <span>Mobile Numbers:</span><br />
                                    <a>+233 (0) 246263191</a><br />
                                    <a>+233 (0) 500629069</a><br />
                                    <a>+233 (0) 543071604</a><br />
                                    <a>+233 (0) 542795320</a>
                                </li>
                                <li>
                                    <span>Email Address:</span><br />
                                    <a>cedarcompanylimited7@gmail.com</a>
                                </li>
                            </ul>
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