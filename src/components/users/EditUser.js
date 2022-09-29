import { useState } from "react";
import { useDispatch } from "react-redux";
import {editUser} from '../../redux/actions/userAction';


const EditUser = ({id,name,email, resetData}) => {
  const [userName,setUserName] = useState(name);
  const [userEmail,setUserEmail] = useState(email);
const dispatch =  useDispatch();

  const updateUser = (e) => {
    e.preventDefault();
    const formInput = {
      id:id,
      name: userName,
      email:userEmail,
    }
    // console.log(FormData)
    // passing form data to action
    dispatch(editUser(formInput));
    resetData()
  }
 
  return (
    <div className="border border-gray-500 p-1">
      <form onSubmit={updateUser}>
        <div className=" flex container mx-auto space-x-2">
          <input type='text' placeholder="name" value={userName} onChange={e => setUserName(e.target.value)}  className="px-2 py-1 border rounded-md mb-4 w-1/2"  />
          <input type='email' placeholder="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="px-2 py-1 border rounded-md mb-4 w-1/2"/>
        </div>
        <div className="mb-1">
          <button className="px-2 bg-blue-900 text-white text-base">Update User</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser