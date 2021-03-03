import React from 'react';
import App from './App';

const suma = (a:number, b:number):number => {
  return a + b;
};

test('funcion suma', () => {
expect(suma(1,2)).toEqual(3);
});
