import Blog from "../Blog/Blog";
import ExperienceJob from "../ExperienceJob/ExperienceJob";
import FresherJob from "../FresherJob/FresherJob";
import MyProfile from "../MyProfile/MyProfile";
import TopItCompanies from "../TopItCompanies/TopItCompanies";


const Home = () => {
    return (
        <div>
            <FresherJob></FresherJob>
            <ExperienceJob></ExperienceJob>
            <TopItCompanies></TopItCompanies>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;