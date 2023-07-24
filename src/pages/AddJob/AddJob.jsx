import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AddJob = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const { register, handleSubmit, reset} = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const photoURL = imgResponse.data.display_url;
                    const saveJob = { positionName: data.positionName, jobLocation:data.jobLocation, companyName:data.companyName, image: photoURL, jobCategory: data.jobCategory, userEmail:user.email }
                    fetch('http://localhost:5000/jobs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveJob)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Job added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                            }
                        })
                }
            })

    }
    return (
        <div className="my-5">
            <h2 className="text-3xl text-center">Add Job</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Position Name </span>
                        </label>
                        <input type="name" placeholder="Position Name"
                            {...register("positionName",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    <div className="form-control w-full ml-4">
                    <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="name" placeholder="Class Name"
                            {...register("jobLocation",{required: true})}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="name" placeholder="Company Name"
                            {...register("companyName",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Company Logo</span>
                        </label>
                        <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />
                    </div>
                    
                </div>
                <div className="form-control w-full my-5">
                    <select className="input input-bordered w-full" {...register("jobCategory")}>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                    
                </select>
                    </div>
                
                
                <div className="text-center">
                    <input type="submit" className="btn btn-block hover:bg-slate-800 bg-black text-white  my-4 " value="Add Class" />
                </div>
            </form>
            
        
        </div>
        
    );
};

export default AddJob;