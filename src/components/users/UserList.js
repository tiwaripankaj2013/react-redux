import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../actions/userAction';

import EditUser from './EditUser';
const UserList = () => {
    const [user, setUser] = useState({})
    const store = useSelector((store) => store)
    const dispatch = useDispatch();
    const findUser = (id) => {
        let res = store.listUser.find((item) => item.id === id);
        setUser(res);
    }

    const resetData = () => {
        setUser({})
    }

    return (
        <div>
            <p>UserList</p>
            {
                Object.keys(user).length === 0 ? (
                    <ul>
                        {store.listUser.map((item,) => {
                            return <li key={item.id} className="mb-2">
                                <span className='inline-block px-2'>{item.name}</span>
                                <span className='inline-block px-2'>{item.email}</span>
                                <button className='bg-yellow-600 text-white text-base px-2 py-1 rounded mx-1' onClick={() => findUser(item.id)}>Edit</button>
                                <button className='bg-red-800 text-white text-base px-2 py-1 rounded' onClick={() => dispatch(deleteUser(item.id))}>Delete</button>
                            </li>
                        })}
                    </ul>
                ) : (
                <EditUser {...user} resetData={resetData} />
                )
            }
        </div>
    )
}

export default UserList