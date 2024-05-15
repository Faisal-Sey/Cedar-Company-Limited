import PageLayout from "../../components/common/pageLayout/index.jsx";
import AboutImage from "../../assets/images/banners/banner_three.jpg";
import FunFacts from "../../components/home/funFacts.jsx";
import CEOImage from "../../assets/images/team/ceo.jpg";
import TechnicalManagerImage from "../../assets/images/team/tech_manager.jpg";


export default function () {
    // window.scrollTo(0, 0);
    return (
        <PageLayout>
            <>
                {/* Page Content */}
                <div className="page-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>About Us</h1>
                                <span>We have experienced and qualified personnel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-info about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more-info-content">
                                    <div className="row">
                                        <div className="col-12 align-self-center">
                                            <div className="right-content">
                                                <span>our solid background on inspection</span>
                                                <h2>
                                                    Get to know about <em>Cedar Inspection Ventures (CIV)</em>
                                                </h2>
                                                <p>
                                                    Our experience in inspection, together with our extensive knowledge
                                                    of international standards guarantees that our clients have access to
                                                    the best personnel and techniques in the respective inspection disciplines.
                                                    Our inspectors are equipped with modern equipment and operations are
                                                    coordinated and reported via our web-based asset management platform.
                                                    <br />
                                                    <br />
                                                    CIV believe that we form part of your front line risk management resource
                                                    ensuring that project assets are prepared in compliance with relevant
                                                    standards. Our team comprises of extensively qualified, safety focused
                                                    inspectors who are highly mobile and at home in their operating
                                                    environments. Our inspectors are highly experienced and fully qualified
                                                    with the international Standards of ISO, ASNT, ASME, LEED and etc.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="left-image">
                                                <img src={AboutImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FunFacts />
                <div className="team mb-3 mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>
                                        Our Leading <em>members</em>
                                    </h2>
                                    <span>Brief background of the leadership of Cedar Inspection Ventures (CIV)</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-item">
                                    <img src={CEOImage} alt="" />
                                    <div className="down-content">
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
                                        <p>Email: ericnanaantwi97@cedarinspectionventures.com / ericnanaantwi97@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="team-item">
                                    <img src={TechnicalManagerImage} alt="" />
                                    <div className="down-content">
                                        <h4>Mohamed Abdelghani Rabie</h4>
                                        <span>Technical Manager</span>
                                        <p>
                                            He is Egyptian Metallirgy Engineer who has been in oil field since 20 years ago
                                            until now with adequated knowledge on non destructive test and oil county
                                            tubular goods ( OCTG) , Lifting inspection , new manufacture welding in onshore
                                            / offshore rigs for drilling , service , owner company's in north africa with
                                            various inspection company Nov tuboscope, STC , Scope petroleum company Iraq .
                                            He is NDT Level III inspector and has Asnt No 333744 Level iii MT , PT , UT
                                            methods and can create and develop procedures , SOP , and certified , training
                                            inspectors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="team-item">
                                <div className="down-content">
                                    <h4>Charles A. Okyere</h4>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </PageLayout>
    )
}