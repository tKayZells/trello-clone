import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./loginComponent";

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

export {};