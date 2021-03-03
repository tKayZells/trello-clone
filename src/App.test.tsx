import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from './App';

const suma = (a:number, b:number):number => {
  return a + b;
};

test('funcion suma', () => {
expect(suma(1,2)).toEqual(3);
});

describe("App", ()=> {
  test("renders App", ()=> {
      render(<App/>);
  })
});
