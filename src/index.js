import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1> Hello world </h1>;
//console.log(element); 
ReactDOM.render(element, document.getElementById('root'));
// first: element we wanna render
// second element: where in the real dom we want to render this in here 
// it will be in index.html 