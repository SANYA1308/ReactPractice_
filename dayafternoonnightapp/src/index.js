import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
//Also can give the input of the date yourself
// let currDate = new Date(2020, 5, 5, 19);
let currDate =new Date();
 currDate = currDate.getHours();

 let greeting = '';
 const cssStyle = { };

 if(currDate>= 1 && currDate<12){
   greeting = "Good Morning";
   cssStyle.color = "blue";
 }
 else if(currDate>=12 && currDate<18){
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
 }

 else{
  greeting = "Good Night";
  cssStyle.color = "black";
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
    <div>
    <h1>Hello <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
   
 
);

