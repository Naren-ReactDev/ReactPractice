import {render,screen } from '@testing-library/react';
import TestFirst from '../reactJS/functionalComponents/TestFirst';

describe("test Counter",()=>{
    
    test("test first case",()=>{
        render(<TestFirst/>)
       const textelement= screen.getByRole('button').textContent;
       console.log("====>"+textelement)
       expect(textelement).toEqual('increment');
    })
   
});