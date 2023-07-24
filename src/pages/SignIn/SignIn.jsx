import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
    
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = data => {
        console.log(data)
        signIn(data.email,data.password)
        .then(loggedUser=>{
            console.log(loggedUser);
            navigate(from, {replace:true});
        })
        .catch(error=>console.log(error))
    };
    return (
        <div className="my-5">
            <h2 className="text-3xl text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between">
                    
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="Email"
                            {...register("email")}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mr-4 ">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        
                           <input type="text" placeholder="Password"
                        {...register("password")}
                        className="input input-bordered w-full"
                    />
                        
                         
                    </div>
                    
                    
                </div>
                
                <div className="text-center">
                    <input type="submit" className="btn btn-block hover:bg-slate-800 bg-black text-white  my-4 " value="Login" />
                </div>
            </form>
            <p>New to A to Z Job <Link to='/signUp'>Sign Up</Link></p>
            
        </div>
    );
};

export default SignIn;