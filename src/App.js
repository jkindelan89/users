import './App.css';
import UserList from "./components/UsersList";
import useUser from "./hooks/useUser";
import {UserContext} from "./contexts/UserContext";
import {AddUser} from "./components/AddUser";

function App() {
    const {users, addUser, deleteUser, adds, deletes, loading, errors,pagination,nextPage,prevPage} = useUser()
    return (
        <UserContext.Provider value={ {users, addUser, deleteUser,errors,pagination,nextPage,prevPage} }>
            <div className="flex flex-col bg-slate-50 p-4">
                <div className="flex w-full bg-slate-200 p-2 rounded justify-between">
                    <label className='text-xl font-bold'>Users</label>
                    <div className="flex text-lg gap-4">
                        <div>Adds: <span className="font-bold text-green-500">{adds}</span></div>
                        <div>Deletes: <span className="font-bold text-red-500">{deletes}</span></div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  py-4">
                    <div className="w-full md:w-1/2">
                        {loading ? <label className="font-bold text-xl">Loading...</label> :
                            <UserList  />}
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <AddUser  />
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;
