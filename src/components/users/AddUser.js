import { useState } from "react";
import { useDispatch } from "react-redux";
import {addNewUser} from '../../redux/actions/userAction';

const AddUser = () => {
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
const dispatch =  useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      id: Number(new Date()),
      name: userName,
      email:userEmail,
    }
    // passing form data to action
    dispatch(addNewUser(formInput));
    setUserName('');
    setUserEmail('');
  }
 
  return (
    <div className="border border-gray-500 p-1">
      <form onSubmit={formSubmit}>
        <div className=" flex container mx-auto space-x-2">
          <input type='text' placeholder="name" value={userName} onChange={e => setUserName(e.target.value)}  className="px-2 py-1 border rounded-md mb-4 w-1/2"  />
          <input type='email' placeholder="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="px-2 py-1 border rounded-md mb-4 w-1/2"/>
        </div>
        <div className="mb-1">
          <button className="px-2 bg-blue-900 text-white text-base">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser