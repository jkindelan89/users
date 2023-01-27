import {useContext, useRef} from "react";
import {UserContext} from "../contexts/UserContext";

export default function AddUser() {

    const {addUser, errors} = useContext(UserContext)
    const nameRef = useRef();
    const emailRef = useRef();
    const genderRef = useRef();
    const statusRef = useRef();
    const formRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            gender: genderRef.current?.value,
            status: statusRef.current?.value
        };
        formRef.current?.reset()
        addUser(data);
    };


    return (
        <div className=" md:px-8">

            <h2 className='text-lg'>Add User</h2>
            <form ref={formRef} onSubmit={onSubmit}>
                <div className="py-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Name
                    </label>
                    <input data-testid="name" required ref={nameRef}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text"/>
                    {errors.name && <label className='text-sm text-red-600'>{errors.name}</label>}
                </div>

                <div className="py-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input data-testid="email" required ref={emailRef}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="username" type="email"/>
                    {errors.email && <label className='text-sm text-red-600'>{errors.email}</label>}
                </div>

                <div className="py-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Gender:</label>
                    <select data-testid="gender"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ref={genderRef} required>
                        <option/>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <label className='text-sm text-red-600'>{errors.gender}</label>}
                </div>
                <div className="py-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2"> Status:</label>
                    <select data-testid="status"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ref={statusRef} required>
                        <option/>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && <label className='text-sm text-red-600'>{errors.status}</label>}
                </div>
                <button className="py-2 bg-blue-600 text-white" type="submit">Add</button>
            </form>
        </div>

    );
}
