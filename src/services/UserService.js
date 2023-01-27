import {baseUrl, headers, token} from "../utils/config";

export const getUsers = (page,perPage)=>{
    return fetch(
        baseUrl+`?page=${page}&per_page=${perPage}`,
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