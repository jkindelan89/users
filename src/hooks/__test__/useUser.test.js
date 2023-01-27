import {fireEvent, render, renderHook, screen} from "@testing-library/react";
import useUser from "../useUser";
import {users} from "../../mocks/users";
import {act} from "react-dom/test-utils";

global.fetch = jest.fn();

test('request user when userHook is called ', async () => {
    fetch.mockImplementationOnce(()=>Promise.resolve({
        json: () => Promise.resolve(users ),
    }))
    await act(async ()=>{
        const { result } = renderHook(() => useUser());
    })
    expect(fetch).toBeCalled()
});