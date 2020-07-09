import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm.js';


test('ContactForm adds new contact to an array of objects', async() => {

// What tests will I run? Arrange Act Assert
render(<ContactForm />);


// Arrange --------------------------------------
// type into all three inputs
    // 1. query for all inputs
const firstnameInput = screen.getByPlaceholderText(/edd/i);
const lastnameInput = screen.getByPlaceholderText(/burke/i);
const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
const messageInput = screen.getByTestId(/message/i);
    // 2. run the changes event to add text
fireEvent.change(firstnameInput, { target: { value: 'Bri' } });
fireEvent.change(lastnameInput, { target: { value: 'Griffiths' } });
fireEvent.change(emailInput, { target: { value: 'briangriffiths@hotmail.com' } });
fireEvent.change(messageInput, { target: { value: 'Hello testing 1 2 3' } });


// Act --------------------------------------------
// click submit button
    // 1. query for the button
const submitButton = screen.getByRole('button');
    // 2. run the click event on the button
fireEvent.click(submitButton);

// Assert -----------------------------------------
// assert that new contact is in the list
//     // 1. query for the new contact text
const newContact = await screen.findByTestId('result');
//     // 2. assert that it is being rendered
expect(newContact).toBeInTheDocument();
//console.log(newContact)
    
})



