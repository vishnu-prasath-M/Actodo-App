import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
{

    const navigate = useNavigate()
    const users = props.users 
    const setusers = props.setusers

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])   
        navigate("/")
    }


    return(
    <div className="bg-slate-300 p-10 flex justify-center bg-[url('../src/assets/bgthree.jpg')] h-screen bg-cover bg-center bg-opacity-15">
        <div className="bg-white p-9 border rounded-lg w-96 h-96 my-28  flex flex-col gap-3 backdrop-blur-lg bg-opacity-35 backdrop-filter">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign up here :)</p>

            <div className="flex flex-col gap-5 my-2">
                <input 
                type="text" 
                className="w-64 p-1 bg-transparent border rounded-md shadow-md  placeholder:text-black" 
                placeholder="  Username"
                onChange={handleUInput}
                />

<input 
                type="text" 
                className="w-64 p-1 bg-transparent border rounded-md shadow-md  placeholder:text-black" 
                placeholder="  Password"
                onChange={handlePInput}
                />

<input 
                type="text" 
                className="w-64 p-1 bg-transparent border rounded-md shadow-md  placeholder:text-black" 
                placeholder="  Confirm password"/>

                <button className="bg-[#FCA201] w-24 p-1 rounded-md ml-20" onClick={addUser}>
                    Sign Up
                </button>

                <p className="text-white">Already have an account? <Link to={"/"} className="underline text-blue-700 ">Login</Link>  </p>
            </div>
        </div>
    </div>)
}

export default Signup