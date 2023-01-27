import React, {useContext} from "react"
import {UserContext} from "../contexts/UserContext";

export default function UserItem({user}) {
    const {deleteUser} = useContext(UserContext)
    const askDelete = () => {
        if (window.confirm(`Do you want delete user: ${user.name}`)){
            deleteUser(user.id)
        }
    }

    return (
        <div data-testid="user-item" className="my-2 flex justify-between pr-2">
            <label>{user.name}</label>
            <button className="bg-red-600 text-white" onClick={askDelete}>Delete</button>
        </div>
    )
}