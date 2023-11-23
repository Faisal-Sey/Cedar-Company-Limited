import ServiceImageOne from "../../assets/images/services/ANDT.jpg";
import ServiceImageTwo from "../../assets/images/services/OCTG.jpg";
import ServiceImageThree from "../../assets/images/services/Lifting.jpg";
import ServiceImageFour from "../../assets/images/services/Integrity.jpg";


export default function () {
    return (
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>
                                Our <em>Services</em>
                            </h2>
                            <span>What we do at Cedar Company Limited.</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageFour} alt="" />
                            <div className="down-content">
                                <h4>Integrity Management</h4>
                                <p>
                                    Clients are seeking benefits that can be provided by modernising
                                    and transforming integrity management, improved efficiencies,
                                    improved safety, reduced risks and costs. Our Integrity and inspection
                                    experts...
                                </p>
                                <a href="" className="filled-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageOne} alt="" />
                            <div className="down-content">
                                <h4>Advanced NDT</h4>
                                <p>
                                    Our advanced non-destructive testing (NDT) techniques should
                                    be ever-present in evaluating your critical assets helping
                                    to identify and prevent flaws and increase reliability. Our
                                    highly-skilled team...
                                </p>
                                <a href="" className="filled-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageTwo} alt="" />
                            <div className="down-content">
                                <h4>OCTG Inspection Services</h4>
                                <p>
                                    To expand on our service, we offer tubular inspections
                                    and thread/equipment inspections according to DS-1, API, ML, NS2
                                    level and client specification of OCTG Inspections. Our
                                    Solution for...
                                </p>
                                <a href="" className="filled-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service-item">
                            <img src={ServiceImageThree} alt="" />
                            <div className="down-content">
                                <h4>OCTG Inspection Services</h4>
                                <p>
                                    To expand on our service, we offer tubular inspections
                                    and thread/equipment inspections according to DS-1, API, MLN, S2
                                    level and client specification of OCTG Inspections. Our
                                    Solution for...
                                </p>
                                <a href="" className="filled-button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}