import { render, screen } from '@testing-library/react';

import {UserContext} from "../../contexts/UserContext";
import UserList from "../UsersList";
import {users} from "../../mocks/users";



test('render users', () => {
    render(
        <UserContext.Provider value={ {users} }>
            <UserList/>
        </UserContext.Provider>
    );
    const userItems = screen.queryAllByTestId("user-item");
    expect(userItems).toHaveLength(users.length);
});

