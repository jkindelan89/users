import {useEffect, useState} from "react"
import {addUsersService, deleteUserService, getUsers} from "../services/UserService"
import {LIMIT} from "../utils/config";


export default function useUser() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [adds, setAdds] = useState(0)
    const [deletes, setDeletes] = useState(0)
    const [errors, setErrors] = useState({})
    const [pagination, setPagination] = useState({currentPage:1,total:0,totalPages:0})

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
                getUsersList(pagination.currentPage)
            }).catch((error) => {
            console.log(error);
        })
    }

    const getUsersList = (page) => {
        setLoading(true)
        getUsers(page,LIMIT).then(res => {
            if (res.ok) {
                setPagination({
                    currentPage:Number(res.headers.get('X-Pagination-Page')),
                    total:res.headers.get('X-Pagination-Total'),
                    totalPages:res.headers.get('X-Pagination-Pages')
                })
                return res.json()
            }
            return Promise.reject(res)
        })
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

    const nextPage = function () {
        if (pagination.currentPage < pagination.totalPages ){
            getUsersList(pagination.currentPage+1)
        }
    }

    const prevPage = function () {
        if (pagination.currentPage >1 ){
            getUsersList(Number(pagination.currentPage)-1)
        }
    }

    useEffect(getUsersList, [])

    return {users, loading, addUser, deleteUser, adds, deletes,errors,pagination,nextPage, prevPage}
}