
import project1 from "../../../assets/images/project1.png";
import project2 from "../../../assets/images/project2.png";
import project3 from "../../../assets/images/project3.png";
import project4 from "../../../assets/images/project4.png";
import project5 from "../../../assets/images/project5.png";
import project6 from "../../../assets/images/project6.png";
const Projects = () => {
    
    return (
        <div className="project w-[90%] mx-auto" id="project">
            
            
            <div className="bg-black bg-opacity-80 text-white my-5">
            <h1 className="text-5xl">Martial Art Academy Summer School</h1>
            </div>
            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                <div className="h-max w-full 
                transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                    <img
                        src={project1}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                    <img
                        src={project2}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                </div>
            </div>
            <div className="bg-black bg-opacity-80 text-white my-5">
            <h1 className="text-5xl">Avenger Toy Store</h1>
            </div>
            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                <div className="h-max w-full 
                transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                    <img
                        src={project3}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                    <img
                        src={project4}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                </div>
            </div>
            <div className="bg-black bg-opacity-80 text-white my-5">
            <h1 className="text-5xl">Chef Recipe Website</h1>
            </div>
            <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                <div className="h-max w-full 
                transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                    <img
                        src={project5}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                    <img
                        src={project6}
                        alt=""
                        className="w-full object-cover object-top rounded-lg"
                    />
                </div>
            </div>
            
            
        </div>
    );
};

export default Projects;