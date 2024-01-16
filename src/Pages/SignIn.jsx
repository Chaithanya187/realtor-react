import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Oauth from "../Components/Oauth";




const SignIn =()=>{
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    function changeHandler(e){
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
        }))

    }
    const [showPassword,setShowPassword] = useState(false);
    const {email,password} = formData;
    return (
            <section>
                <h1 className=" text-3xl font-bold text-center mt-3">Sign In</h1>
                <div className=" flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
                    <div className=" md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww" alt="sing in" className="w-full rounded-2xl"/>
                    </div>
                    <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                        <form onsub>
                            <input type="email" id="email" value={email} onChange={changeHandler} placeholder="Email Address" className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded outline-none mb-6"/>
                            <div className=" relative mb-6">
                                <input type={showPassword?'text':'password'} id="password" value={password} onChange={changeHandler} placeholder="Password" className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded outline-none"/>
                                 {
                                   showPassword?
                                    <IoMdEye  className=" absolute right-0 top-1/4 mr-2 text-xl" onClick={()=>setShowPassword(!showPassword)}/>
                                    :
                                    <IoMdEyeOff  className=" absolute right-0 top-1/4 mr-2 text-xl" onClick={()=>setShowPassword(!showPassword)}/>
                                 }
                            </div>
                            <div className=" flex justify-between items-center mb-6">
                                <p>Don't have an account?
                                    <Link to='/sign-up' className=" text-red-500 hover:text-red-600 duration-200 transition ease-in-out ml-1">Register</Link></p>
                                <p><Link className="text-blue-600 hover:text-blue-800 duration-200 transition ease-in-out">Forgot password?</Link></p>
                            </div>
                            <button className=" w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-6">SIGN IN</button>
                            <div className=" flex before:border-t items-center before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300 mb-6">
                                <p className=" text-center font-semibold mx-4">OR</p>
                            </div>
                            <Oauth/>
                        </form>
                    </div>
                </div>
            </section>
    )
}
export default SignIn;