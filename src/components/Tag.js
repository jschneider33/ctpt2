import React from "react"
import Styles from "./tagStyles.module.css"

export default function Tag(props){
    // console.log(props.class);
    var newStyle = {"fontSize": '2rem'};
    if(props.class == "notSelected"){
        newStyle["backgroundColor"]= 'red'
    } else {
        newStyle["backgroundColor"]= 'green'
    }
    return(
        <div>
            <div style={newStyle} id={props.id}>{props.tagName}</div>
        </div>
    )
}