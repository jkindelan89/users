import React, {useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import UserItem from "./UserItem";

export default function Pagination(){
    const {pagination,nextPage,prevPage} = useContext(UserContext)
    return (
        <div className="flex gap-4 content-center justify-center">
            <button className="py-2 bg-blue-600 text-white" onClick={prevPage}>Prev</button>
            <label className="flex flex-wrap content-center" > Page {pagination.currentPage} of {pagination.totalPages}</label>
            <button className="py-2 bg-blue-600 text-white" onClick={nextPage}>Prev</button>
        </div>
    )
}