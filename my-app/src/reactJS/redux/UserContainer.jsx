import { useEffect, useMemo } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './user/UserActions';

const UserContainer=()=>{
    const users=       useSelector((state)=>{
 console.log("==>"+JSON.stringify(state));
        return state.users;
    });

   // console.log("users==>"+JSON.stringify(users));
 const dispatch=  useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch]);
   
    return (
        <><h2>Users List</h2>
        {users.map((item,index)=>{
           return <div id={index} >{`${item.index} . ${item.name}`}</div>
        })}
        </>
    )
}
export default UserContainer