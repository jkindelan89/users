import React, {useContext} from "react"
import UserItem from "./UserItem"
import {UserContext} from "../contexts/UserContext";


export default function UserList(){
    const {users} = useContext(UserContext)
    return (
        <div>
            {users.map(user=><UserItem key={user.id}  user={user}/>)}
        </div>
    )
}