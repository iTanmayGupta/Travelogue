import './Card.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Card extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="CMainCont">
                This is a card.
            </div>
        )
    }
}

export default Card