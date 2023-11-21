import DownloadSection from "../../components/Home/DownloadSection";
import HeaderSection from "../../components/Home/HeaderSection";
import ImageNumber from "../../components/Home/ImageNumber";
import PopularJobCategories from "../../components/Home/PopularJobCategories";
import Recruiting from "../../components/Home/Recruiting";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
   
    return (
        <div>
            <HeaderSection></HeaderSection>   
            <PopularJobCategories></PopularJobCategories>
            <Testimonials></Testimonials>
            <ImageNumber></ImageNumber>
            <DownloadSection></DownloadSection>
            <Recruiting></Recruiting>
        </div>
    );
};

export default Home;