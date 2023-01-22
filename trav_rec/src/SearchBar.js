import './SearchBar.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// const express = require("express");
// const app = express()
// const bodyParser = require("body-parser")
// const path = require("path")
import axios from 'axios';
class SearchCont extends React.Component{
    constructor(props){
        super(props);
    }

    handleSearch = () => {
        console.log("here")
        // const headers = {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Origin" : "*",
        //     "Access-Control-Allow-Credentials" : true,
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        // }
        axios.post("http://127.0.0.1:5000/api/v1/generateItinerary", 
        // {headers: headers},
        {
          "name" : "vancouver",
          "location" : "Vancouver",
          "days" : 5,
          "activities" : ["Visit cultural landmarks and historic sites", "Try a new adventure sport or activity, like paragliding or bungee jumping"]
          })
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            console.log("Oh no")
          })
      }

    

    // handleSearch = () => {
    //     <Backdrop
    //         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //         open={open}
    //         onClick={handleClose}
    //     ></Backdrop>
    // }

    render(){
        return(
            <div className="MainCont">
                <div className="Text">
                    Ready to plan your next trip? Enter destination below
                </div>
                <TextField id="outlined-basic" label="Destination Name" variant="outlined"
                sx={{
                    width: '60%',
                    marginTop: '2%',
                }} />
                <div className="ButtonCont">
                    <div className="GoButton">
                        <Button variant="contained" size='large' className='GoButtonStyle' onClick={() => {this.handleSearch()}}>Search</Button>
                    </div>
                    <div className="SurpriseButton">
                        <Button variant="contained" size='large' className='SurpriseButtonStyle'>Surprise Me!</Button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SearchCont