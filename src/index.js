// @flow

import React from "react"
import ReactDOM from "react-dom";

export class Index extends React.Component<{}>{

    render(){
        return <p>Hello world?</p>
    }

};

if (!module.parent){
    var el = document.getElementById("root")
    if (el === null){
        throw new Error("Couldn't load root element!");
    } else{
        ReactDOM.render(<Index />, el);
    }
    
}