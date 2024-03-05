import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function get(message){
var menuSectionMessage =  message;
ReactDOM.render(<Menu />,document.getElementById('menu'));
}

class Menu extends React.Component{
    constructor(props){
        super(props);
    };
    render(){return(<div>
        <h1>Hello React!</h1>
    </div>)}
}