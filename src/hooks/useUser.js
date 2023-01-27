import {useEffect, useState} from "react"
import {addUsersService, deleteUserService, getUsers} from "../services/UserService"


export default function useUser() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [adds, setAdds] = useState(0)
    const [deletes, setDeletes] = useState(0)
    const [errors, setErrors] = useState({})

    const addUser = (data) => {
        setErrors({})
        addUsersService(data).then(res => {
            if (res.ok) {
                return res.json()
            }
             return Promise.reject(res)
        })
            .then((response) => {
                setAdds(c => c + 1)
                getUsersList()
            }).catch((error) => {
            error.json().then((data)=>{
                console.log(data)
                if (Array.isArray(data)){
                    const errors = {}
                    data.forEach((e)=>{
                        errors[e.field]= e.message;
                    })
                    setErrors(errors)
                }
            })

        });
    }

    const deleteUser = (id) => {
        deleteUserService(id)
            .then((response) => {
                setDeletes(c => c + 1)
                getUsersList()
            }).catch((error) => {
            console.log(error);
        })
    }

    const getUsersList = () => {
        setLoading(true)
        getUsers().then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setUsers([])
                setLoading(false)
            });
    }
    useEffect(getUsersList, [])

    return {users, loading, addUser, deleteUser, adds, deletes,errors}
}