// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form"

// const Login = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm()
//       const onSubmit = (data) => console.log(data)
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </Link>
//           </form>
//           <h3 className="font-bold text-lg">Login</h3>
//           <div className="mt-4 space-y-2 ">
//             <span>Email</span>
//             <br />
//             <input  {...register("email", { required: true })}  type="email"  placeholder="Enter your Email" className="w-80 px-3 py-1 rounded-md outline-none" />
//             {errors.email && <span>This field is required</span>}
//           </div>
//           <div className="mt-4 space-y-2 ">
//             <span>Password</span>
//             <br />
//             <input type="text" {...register("password", { required: true })}  placeholder="Enter your Password" className="w-80 px-3 py-1 rounded-md outline-none" />
//             {errors.password && <span>This field is required</span>}
            
//           </div>

//           {/* {Button} */}
//           <div className="flex justify-around mt-4">
//             <button className="bg-pink-500 rounded-md px-4 py-2  text-white hover:bg-pink-700 duration-300">Login</button>
//            <p>Not Registerd? <Link to={"/signup"} className=" underline text-blue-500 cursor-pointer">Sign up</Link></p>
           
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default Login;



import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 rounded-md outline-none"
              />
              <br />
              {errors.email && <span className="text-sm text-red-500 ">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 rounded-md outline-none"
              />
              <br />
              {errors.password &&   <span className="text-sm text-red-500 " >This field is required</span>}
            </div>

            {/* Login button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 rounded-md px-4 py-2 text-white hover:bg-pink-700 duration-300">
                Login
              </button>
              <p>Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
