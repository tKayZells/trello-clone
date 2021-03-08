import React from 'react';
import * as  ReactDOM from "react-dom";
import { render, cleanup } from '@testing-library/react';
import Navbar from "./components/navbar/Navbar";
//import 'jest-dom/extend-expect'

import renderer from 'react-test-renderer';


//probar que el componente se renderiza. nota: preguntar sobre el div??.
//usando getByTestId permite acceder a un elemento segun un atributo especial llamado data-testId = "nombre cualquiera"
afterEach(cleanup);

describe("renders Navbnar", ()=> {
    test('renders Navbar react-dom', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Navbar />, div);

      });
    test('renders Navbar react-testing-library', () => {
        render(<Navbar />);
      });
//probar que muestra un determinado texto:

//test("renders the correct content", ()=>{
//  const root = document.createElement("div");
//  ReactDOM.render(<Navbar />, root);
//  expect(root.querySelector("h1")?.textContent).toBe("Usuario");

  //usando @testing-library/dom

  // const {getByText, getByLabelText} = getQueriesForElement(root)
  //expect(getByText("Usuarios")).noT.toBeNull();



     // it("renders correctly", ()=>{
     //   const {getByTestId} = render(<Navbar/>)
     //   expect(getByTestId("nombrex").toHaveTextContent("click me please"));
     // })
     //no reconoce toHaveTextContent

     //it("matches snapshot", ()=>{
     //   const tree = renderer.create(<Navbar/>).toJSON();
     //   expect(tree).toMatchSnapshot();
     //})
     //no reconoce la importacion

})
