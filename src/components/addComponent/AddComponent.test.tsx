import React from 'react';
import AddComponent from './AddComponent';

const suma = (a:number, b:number):number => {
    return a + b;
};

test('funcion suma', () => {
  expect(suma(1,2)).toEqual(3);
});