import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  signUp } = UserAuth();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;


  const handleSubmit = async (e) => {
    e.preventDefault();  
    if(passw.test(password)) 
    { 
      await signUp(email, password);
      try {
        navigate("/");
        console.log("created");
        alert('USER CREATED. Wait for us to redirect you to the homepage...')
      } catch (error) {
        alert("Something went wrong! please try again some times later");
        console.log(error);
      }
    }
    else{
      console.log("could not be created");
      alert('Password must be at least 8-20 characters conating at least one uppercase letter, one lowercase letter, one number');
    }
  };
  const handleOnFocus=()=>{
    setValidated(true);
  }
  const handleOnBlur=()=>{
    setValidated(false);
  }
  const handleValidated=()=>{
    if(passw.test(password)){
      setValidated(false);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center relative from-black to-red-600   ">
      <img
        className="hidden sm:block absolute w-full h-full object-cover -z-40 opacity-30"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      
      <div className="w-[450px] h-[500px] mx-auto bg-black/75 text-white px-10 py-14  ">
       <h1 className="text-3xl font-bold">Sign Up </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col py-4 ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
            />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 my-2 bg-gray-700 rounded"
            type="password"
            required
            placeholder="Password"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleValidated}
            autoComplete="current-password"
            />
          { validated && <p className="text-xs">Password must have at least 8-20 characters with at least 1 uppercase, 1 lowercase and 1 number</p>
          }
          <button className="bg-red-600 py-3 my-6 rounded font-bold">
            Sign Up
          </button>
          <div className="flex justify-between items-center text-sm text-gray-600">
        
            <p>Need Help?</p>
          </div>
          <p className="py-8">
            <span className="text-gray-600">
              Already subscribed to Netflix?
            </span>{" "}
            <Link className="mx-4 opacity-80 hover:opacity-100" to="/signin">Sign In</Link>
          </p>
        </form>
        </div>
      {/* <form
        action=""
        className="flex flex-col space-y-4 items-center justify-center "
      >
        <input className="bg-red-400" type="email" name="email" id="email" />
        <input
          className="bg-red-400"
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Sign UP</button>
      </form> */}
    </div>
  );
};

export default SignUp;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// const SignUp = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const { signUp } = UserAuth();
//   console.log("THE USER ISSSS:::::");
//   // console.log(user);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signUp(email, password);
//       navigate("/");
//     } catch (error) {
//       console.log("erro occurrrrree");
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="w-full h-screen">
//         <img
//           className="hidden sm:block absolute w-full h-full object-cover"
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
//           alt="/"
//         />
//         <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
//         <div className="fixed w-full px-4 py-24 z-50">
//           <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
//             <div className="max-w-[320px] mx-auto py-16">
//               <h1 className="text-3xl font-bold">Sign Up</h1>
//               <form
//                 onSubmit={handleSubmit}
//                 className="w-full flex flex-col py-4"
//               >
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-3 my-2 bg-gray-700 rouded"
//                   type="email"
//                   placeholder="Email"
//                   autoComplete="email"
//                 />
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-3 my-2 bg-gray-700 rouded"
//                   type="password"
//                   placeholder="Password"
//                   autoComplete="current-password"
//                 />
//                 <button className="bg-red-600 py-3 my-6 rounded font-bold">
//                   Sign Up
//                 </button>
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <p>
//                     <input className="mr-2" type="checkbox" />
//                     Remember me
//                   </p>
//                   <p>Need Help?</p>
//                 </div>
//                 <p className="py-8">
//                   <span className="text-gray-600">
//                     Already subscribed to Netflix?
//                   </span>{" "}
//                   <Link to="/signin">Sign In</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
