import {baseUrl, headers, token} from "../utils/config";

export const getUsers = ()=>{
    return fetch(
        baseUrl,
        {
            method: "get",
            headers
        }
    )
}

export const addUsersService = (user)=>{
    return fetch(
        baseUrl+`?access-token=${token}`,
        {
            method: "post",
            body:JSON.stringify(user),
            headers
        }
    )
}

export const deleteUserService = (id)=>{
    return fetch(
        baseUrl+`/${id}?access-token=${token}`,
        {
            method: "delete",
            headers
        }
    )
}