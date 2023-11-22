import Preloader from "../../components/common/preloader/index.jsx";
import TopBanner from "../../components/common/topBanner/index.jsx";
import Header from "../../components/common/header/index.jsx";
import Banner from "../../components/home/banner.jsx";
import RequestForm from "../../components/home/requestForm.jsx";
import Services from "../../components/home/services.jsx";
import FunFacts from "../../components/home/funFacts.jsx";
import MoreInfo from "../../components/home/moreInfo.jsx";
import CallbackForm from "../../components/home/callbackForm.jsx";
import Partners from "../../components/home/partners.jsx";
import Footer from "../../components/common/footer.jsx";
import Testimonials from "../../components/home/testimonials.jsx";


export default function () {
    return (
        <>
            <Preloader />
            <TopBanner />
            <Header />
            <Banner />
            <RequestForm />
            <Services />
            <FunFacts />
            <MoreInfo />
            <CallbackForm />
            <Testimonials />
            <Partners />
            <Footer />
        </>

    )
}