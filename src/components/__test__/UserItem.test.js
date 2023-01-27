import {fireEvent, getByRole, render, screen} from "@testing-library/react";
import {UserContext} from "../../contexts/UserContext";
import {deleteUser} from "../../mocks/functions";
import UserItem from "../UserItem";
import {users} from "../../mocks/users";

test('show user name and delete button', () => {
    render(
        <UserContext.Provider value={ { deleteUser } }>
            <UserItem user={users[0]}/>
        </UserContext.Provider>
    );
    const name = screen.getByText(users[0].name);
    const deleteBtn = screen.getByRole('button', {name: 'Delete'});
    expect(name).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
});

test('call delete function', () => {
    render(
        <UserContext.Provider value={ { deleteUser } }>
            <UserItem user={users[0]}/>
        </UserContext.Provider>
    );
    const deleteBtn = screen.getByRole('button');
    fireEvent.click(deleteBtn)
    expect(deleteUser).toBeCalled()
});