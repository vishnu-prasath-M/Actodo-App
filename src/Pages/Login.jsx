import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FaUser,FaLock} from "react-icons/fa";


function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)

    const users = props.users 

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function checkUser()
    {
        var userfound = false 

        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword)
            {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})

            }
        })

        if(userfound===false)
        {
            console.log("login Failed")
            setRuser(false)
        }


    }

    return(
        <div className="bg-slate-300 p-10 flex justify-center bg-[url('../src/assets/bgthree.jpg')] h-screen bg-cover bg-center">
            {/* <h1 className="text-black font-medium text-2xl absolute top-1/4 z-10">LOGIN</h1> */}
        <div className="bg-white p-9 border rounded-lg w-96 h-96 my-28 flex flex-col gap-3 backdrop-blur-lg bg-opacity-35 backdrop-filter">
            <h1 className="text-3xl font-medium">Hey Hi </h1>
            
            {ruser? <p>I help you manage your activities after you login :)</p>: <p className="text-red-500">Please Sign Up Before you Login!!</p>}
           

            <div className="flex flex-col gap-5 my-2">
            <div className="border rounded-lg shadow-md flex pl-2">
                <input 
                type="text" 
                className="w-4/5 p-1 focus:outline-none  bg-transparent border-none rounded-md placeholder:text-black" 
                placeholder=" Username"
                onChange={handleUInput}
                />
               <FaUser className="relative top-1/4" />
               
               </div>
                
                <div className="border rounded-lg shadow-md flex pl-2">
                <input 
                type="text" 
                className="w-4/5 focus:outline-none p-1 bg-transparent border-none rounded-md  placeholder:text-black" 
                placeholder=" Password"
                onChange={handlePInput} 
                />
                <FaLock className="relative top-1/4"/>
                </div>

                <button className="bg-[#2196F3] w-24 p-1 rounded-md text-white ml-20" onClick={checkUser}>
                    Login
                </button>

                <p className="text-white">Don't have an account?<Link to={"/signup"} className="underline text-blue-700 pl-5">Sign Up</Link>  </p>
            </div>
        </div>
    </div>
    )
}

export default Login