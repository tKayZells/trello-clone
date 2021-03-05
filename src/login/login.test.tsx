import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { fireEvent, render, RenderResult, screen, waitFor } from "@testing-library/react";
import LoginPresenter from "./login.presenter";
import Login from "./login.view";
import React from "react";
import { AuthContext, IAuth } from "../common/auth.context";

describe("Pruebas de la vista login", () => {

    test('Los elementos del formulario estan presentes en el componente', () => {
    
        const { container } = render(<Login onSubmitHandle={ ( values : any ) => {} } />);
    
        const formElement = screen.getAllByRole("form");
        const userInput = screen.getByLabelText("username");
        const passInput = screen.getByLabelText("password");
        const submitBttn = container.querySelector("input[type='submit']");
    
        expect(formElement).toBeTruthy();
        expect(userInput).toBeTruthy();
        expect(passInput).toBeTruthy();
        expect(submitBttn).toBeTruthy();
    });
      
    test('Los campos de usuario y contraseña se actualizan debidamente', async () => {
        
        render(<Login onSubmitHandle={ ( values : any ) => {} } />);
        const [ username, password ] = ["user", "pass"]
        const userInput = screen.getByLabelText("username");
        const passInput = screen.getByLabelText("password");
    
        /** https://hackernoon.com/react-forms-with-formik-and-unit-testing-with-react-testing-library-j0b32c9 */
        await waitFor(()=> fireEvent.change(userInput, { target: { value : username } }));
        await waitFor(()=> fireEvent.change(passInput, { target: { value : password } }));
        // userEvent.type(userInput, username);
        // userEvent.type(passInput, password);
    
        expect( screen.getByLabelText("username")).toHaveValue(username);
        expect( screen.getByLabelText("password")).toHaveValue(password);
    });
    
    
    test('Formulario logea con nombre de usuario y contraseña', async () => {
        
        const onSubmit =  jest.fn();
        const { container } = render(<Login onSubmitHandle={ onSubmit } />);
        const [ username, password ] = ["user", "pass"]
        const userInput = screen.getByLabelText("username");
        const passInput = screen.getByLabelText("password");
        const submitBttn = container.querySelector("input[type='submit']");
        await waitFor(()=>{
            fireEvent.change(userInput, { target: { value : username } });
            fireEvent.change(passInput, { target: { value : password } })
        });
    
        await waitFor(()=> fireEvent.click(submitBttn!) );
        
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith( { username: username, password : password } );
    })    

});

describe("Pruebas del Login Presenter", () => {

    let renderResult : RenderResult;
    let history : any | null;
    let auth : IAuth;

    beforeEach(() => {
        history = createMemoryHistory();
        auth = {
            signIn : jest.fn<{ name : string }, []>(),
            signOut : jest.fn(),
            user : ""
        };
        renderResult = render(<AuthContext.Provider value={auth}> <Router history={history}><LoginPresenter /></Router></AuthContext.Provider>);
    })

    
    test("OnSubmit muestra mensaje de error con credenciales incorrectas", async () =>{
        
        const container = renderResult.container;
        const alertMock = jest.fn();
        window.alert = alertMock;

        var [ username, password ] = ["demo1", "demo1"]
        const userInput = screen.getByLabelText("username");
        const passInput = screen.getByLabelText("password");
        const submitBttn = container.querySelector("input[type='submit']");

        await waitFor(()=>{
            fireEvent.change(userInput, { target: { value : username } });
            fireEvent.change(passInput, { target: { value : password } })
        });
        await waitFor(()=> fireEvent.click(submitBttn!) );

        expect(alertMock).toBeCalled();
    });

    test("OnSubmit al usar credenciales correctas cambia de ruta y asigna usuario", async () =>{ 
        
        const container = renderResult.container;
        var [ username, password ] = ["demo", "demo"]
        const userInput = screen.getByLabelText("username");
        const passInput = screen.getByLabelText("password");
        const submitBttn = container.querySelector("input[type='submit']");

        await waitFor(()=>{
            fireEvent.change(userInput, { target: { value : username } });
            fireEvent.change(passInput, { target: { value : password } })
        });

        await waitFor(()=> fireEvent.click(submitBttn!) );

        expect(history.location.pathname).toBe("/app");
        expect(auth.signIn).toBeCalled();
        expect(auth.signIn).toHaveBeenCalledWith({ name : "demo" });
    });

})

export {};