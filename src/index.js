import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const user={
    name: "Sophia",
    luckyNumber: luckyNumber()
}

function luckyNumber(){
    return Math.floor(Math.random()*1000)+1;
}

function greeting(name, luckNum){
    return(
        <div>
            <div className="container">Welcome {user.name}</div>
            <div className="text-muted">Your lucky number is: {user.luckyNumber}</div>
        </div>
    );
}

ReactDOM.render(
    // <h1 className="container text-center">React Prototypes!</h1>,
   <App/>,
    document.getElementById('root'), 
);
