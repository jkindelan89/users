import React, {useContext} from "react"
import UserItem from "./UserItem"
import {UserContext} from "../contexts/UserContext";
import Pagination from "./Pagination";


export default function UserList(){
    const {users} = useContext(UserContext)
    return (
        <div>
            {users.map(user=><UserItem key={user.id}  user={user}/>)}
            <Pagination/>
        </div>
    )
}