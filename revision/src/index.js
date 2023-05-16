import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

// const flname = "Sanya Gondi";

const fname = "Sanya";
const lname = "Gondi";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // [
    //   <div>
    //     <h1>Hi</h1>,
    //     <h2>Welcome</h2>
    //   </div>
    // ]

    //JSX CHALLENGE

    // <>
    // <h1>Welcome to the Channel</h1>

    // <p>List of Subjects</p>

    // <ol>

    //   <li>Maths</li>
    //   <li>Science</li>
    //   <li>English</li>
    //   <li>Hindi</li>
    //   <li>Social Studies</li>

    //   </ol>

    // </>

    <>
    {/* <h1>My name is {fname + " " + lname}</h1> */}

    {/* template literals */}
    <h1>My name is {`${fname} ${lname}`}</h1>

    <p> Current Date is = {currDate}</p>
    <p>Current Time is = {currTime}</p>
    </>


  
);

