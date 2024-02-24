"use strict";
let personName = '';
personName = prompt('What is your name?') || ``;
if (personName !== null && personName !== '') {
    console.log('Hello ${personName}, would you like to learn some python today?');
}
else {
    console.log('Please, fill your name.');
}
