import Projects from "./Projects";
import myVideo from '../../../assets/video/myVideo.mp4';
const MyProfile = () => {
    return (
        <section>
            <h2 className="text-5xl text-center my-5">My Profile</h2>
            <h4>My Video Resume</h4>
            
            <video width="750" height="500" controls >
      <source src={myVideo} type="video/mp4"/>
     </video>
                    <h4>Few of my Project</h4>
                    <Projects></Projects>
                </section>
                );
};

                export default MyProfile;