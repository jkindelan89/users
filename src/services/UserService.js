const baseUrl = "https://gorest.co.in/public/v2/users";
const token = "88f365ab9d194d3c264c5c6af27985e4139338e8dc0f6be47ff2a5fca5c15cc1";
const headers = {
    Accept: "application/json",
        "Content-Type": "application/json"
}

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