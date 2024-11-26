
import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr = props.activityArr 
    const setActivityArr = props.setActivityArr 

    const [newactivity,setNewactivity] = useState("")

    function handleChange(evt)
    {
        setNewactivity(evt.target.value)
    }

    function addActivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>

        <div>
        <input value={newactivity} onChange={handleChange} type="text" className="border shadow bg-white p-1 focus:border-none" placeholder="Next Activity?"/>
        <button onClick={addActivity} className="bg-[#059862] text-white p-1 border">Add</button>
        </div>

    </div>
    )
}

export default AddTodoForm
