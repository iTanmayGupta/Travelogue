import './ItenaryCont.css';
import React from 'react';
import Card from './Card.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class ItenaryCont extends React.Component{
    constructor(props){
        super(props);

    }

render(){
    return(
        <div className="ICMainCont">
            <div className="ICText">
                Your Itineraries
            </div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </div>
    )
}
}

export default ItenaryCont