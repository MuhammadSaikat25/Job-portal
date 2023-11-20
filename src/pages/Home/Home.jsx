import HeaderSection from "../../components/Home/HeaderSection";
import PopularJobCategories from "../../components/Home/PopularJobCategories";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
   
    return (
        <div>
            <HeaderSection></HeaderSection>   
            <PopularJobCategories></PopularJobCategories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;