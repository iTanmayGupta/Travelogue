import './SearchBar.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Card from './Card.js'
import Typewriter from 'typewriter-effect/dist/core'
// const express = require("express");
// const app = express()
// const bodyParser = require("body-parser")
// const path = require("path")
import axios from 'axios';
class SearchCont extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            popUpToggle : false,
            loc: "",
            days: "",
            a1: false,
            a2: false,
            a3: false,
            a4: false,
            a5: false,
            a6: false,
            a7: false,
            a8: false,
            a9: false,
            a10: false,
            a11: false,
            a12: false,
            a13: false,
            a14: false,
            a15: false,
            response: this.props.response
        }
    }

    handleCancel = () => {
        document.getElementById('pop').style.visibility="hidden"
        this.setState({popUpToggle: false})
    }

    handleResponse = (resp) => {
        this.setState({response: resp})
        console.log("in search bar")
        console.log(resp)
        this.props.handleCardCreation(resp)
    }

    handleImg = (img) => {
        this.props.handleImgCreation(img)
    }

    handleSearch = () => {
        console.log("here")
        var list = []
        if(this.state.a1 == true){
            list.push("Visit cultural landmarks and historic sites")
        }
        if(this.state.a2 == true){
            list.push("Take a guided tour of the city or region")
        }
        if(this.state.a3 == true){
            list.push("Try local cuisine and street food")
        }
        if(this.state.a4 == true){
            list.push("Go shopping at traditional markets and shops")
        }
        if(this.state.a5 == true){
            list.push("Take a day trip to nearby towns or villages")
        }
        if(this.state.a6 == true){
            list.push("Experience traditional performances or festivals")
        }
        if(this.state.a7 == true){
            list.push("Go hiking or camping in natural areas")
        }
        if(this.state.a8 == true){
            list.push("Visit a national park or nature reserve")
        }
        if(this.state.a9 == true){
            list.push("Take a cooking class to learn about local cuisine")
        }
        if(this.state.a10 == true){
            list.push("Go on a boat ride or cruise")
        }
        if(this.state.a11 == true){
            list.push("Visit a museum or art gallery")
        }
        if(this.state.a12 == true){
            list.push("Attend a concert or live music event")
        }
        if(this.state.a13 == true){
            list.push("Take a spa or wellness treatment")
        }
        if(this.state.a14 == true){
            list.push("Try a new adventure sport or activity, like paragliding or bungee jumping")
        }
        if(this.state.a15 == true){
            list.push("Take a language class or conversation exchange to practice the local language.")
        }
        console.log(list)
        console.log(this.state.loc)
        console.log(this.state.days)
        // const headers = {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Origin" : "*",
        //     "Access-Control-Allow-Credentials" : true,
        //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        // }
        axios.post("http://127.0.0.1:5000/api/v1/generateItinerary", 
        // {headers: headers},
        {
          "name" : this.state.loc,
          "location" : this.state.loc,
          "days" : this.state.days,
          "activities" : list
          })
          .then((response) => {
            this.handleResponse(response.data)
            this.handleImage()
          })
          this.handleCancel()
        
      }
    
    handleImage = () => {
        console.log("here")
        axios.get("http://127.0.0.1:5000/api/v1/generateImage?prompt=" + '"' + this.state.loc + '"')
        .then((response) => {
            console.log(response.data[0])
            this.handleImg(response.data[0]["url"])
        })
    }
    
    handlePopUp = () => {
        this.setState({popUpToggle: true})
        document.getElementById('pop').style.visibility="visible"
        // <Backdrop
        //     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        //     // open={open}
        //     // onClick={handleClose}
        // ></Backdrop>
    }

    handlea1 = () => {
        this.state.a1 ? (
            this.setState({a1: false})
        ): this.setState({a1: true})
    }

    handlea2 = () => {
        this.state.a2 ? (
            this.setState({a2: false})
        ): this.setState({a2: true})
    }

    handlea3 = () => {
        this.state.a3 ? (
            this.setState({a3: false})
        ): this.setState({a3: true})
    }

    handlea4 = () => {
        this.state.a4 ? (
            this.setState({a4: false})
        ): this.setState({a4: true})
    }

    handlea5 = () => {
        this.state.a5 ? (
            this.setState({a5: false})
        ): this.setState({a5: true})
    }

    handlea6 = () => {
        this.state.a6 ? (
            this.setState({a6: false})
        ): this.setState({a6: true})
    }

    handlea7 = () => {
        this.state.a7 ? (
            this.setState({a7: false})
        ): this.setState({a7: true})
    }
    
    handlea8 = () => {
        this.state.a8 ? (
            this.setState({a8: false})
        ): this.setState({a8: true})
    }

    handlea9 = () => {
        this.state.a9 ? (
            this.setState({a9: false})
        ): this.setState({a9: true})
    }

    handlea10 = () => {
        this.state.a10 ? (
            this.setState({a10: false})
        ): this.setState({a10: true})
    }

    handlea11 = () => {
        this.state.a11 ? (
            this.setState({a11: false})
        ): this.setState({a11: true})
    }

    handlea12 = () => {
        this.state.a12 ? (
            this.setState({a12: false})
        ): this.setState({a12: true})
    }

    handlea13 = () => {
        this.state.a13 ? (
            this.setState({a13: false})
        ): this.setState({a13: true})
    }

    handlea14 = () => {
        this.state.a14 ? (
            this.setState({a14: false})
        ): this.setState({a14: true})
    }

    handlea15 = () => {
        this.state.a15 ? (
            this.setState({a15: false})
        ): this.setState({a15: true})
    }

    componentDidMount = () => {
        var t1 = document.getElementById('t1')

        var typewriter = new Typewriter(t1, {
            loop: true,
            delay: 75,
        });

        typewriter
            .typeString('<div style="margin-top: 3%"><span style="font-family: \'Courier New\', Courier, monospace; font-size: 40px;" >Ready to plan your next trip? Enter destination below </span></div>')
            .pauseFor(5000)
            .deleteChars(0.1)
            .start()
    } 

    // handleSubmit = () => {
    //     list = []
    //     if(this.state.a1 == true){
    //         list.push("Visit cultural landmarks and historic sites")
    //     }
    //     if(this.state.a2 == true){
    //         list.push("Take a guided tour of the city or region")
    //     }
    //     if(this.state.a3 == true){
    //         list.push("Try local cuisine and street food")
    //     }
    //     if(this.state.a4 == true){
    //         list.push("Go shopping at traditional markets and shops")
    //     }
    //     if(this.state.a5 == true){
    //         list.push("Take a day trip to nearby towns or villages")
    //     }
    //     if(this.state.a6 == true){
    //         list.push("Experience traditional performances or festivals")
    //     }
    //     if(this.state.a7 == true){
    //         list.push("Go hiking or camping in natural areas")
    //     }
    //     if(this.state.a8 == true){
    //         list.push("Visit a national park or nature reserve")
    //     }
    //     if(this.state.a9 == true){
    //         list.push("Take a cooking class to learn about local cuisine")
    //     }
    //     if(this.state.a10 == true){
    //         list.push("Go on a boat ride or cruise")
    //     }
    //     if(this.state.a11 == true){
    //         list.push("Visit a museum or art gallery")
    //     }
    //     if(this.state.a12 == true){
    //         list.push("Attend a concert or live music event")
    //     }
    //     if(this.state.a13 == true){
    //         list.push("Take a spa or wellness treatment")
    //     }
    //     if(this.state.a14 == true){
    //         list.push("Try a new adventure sport or activity, like paragliding or bungee jumping")
    //     }
    //     if(this.state.a15 == true){
    //         list.push("Take a language class or conversation exchange to practice the local language.")
    //     }
    //     this.setState({activities: list})
    //     console.log(list)

    // }

    render(){
        // const { response } = this.props;
        return(
            <div className="MainCont">
                <div id="pop" className="Dark">
                    <div className="Form">
                        <div className="SmallText">
                            You are just a few steps away from the trip of your dreams
                            <br></br>
                            <TextField id="standard-1" label="Number of Days" variant="standard" onChange={(e) => {
                                this.setState({days: e.target.value})
                            }} InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            In
                            sx={{
                                width: '60%',
                                marginTop: '4%',
                            }} />
                            <div className="SmallerText">
                                Choose all the activities that interest you!
                            </div>
                            <FormGroup className="Left">
                                <FormControlLabel onChange={() => {this.handlea1()}} control={<Checkbox />} label="Visit cultural landmarks and historic sites" />
                                <FormControlLabel onChange={() => {this.handlea2()}} control={<Checkbox />} label="Take a guided tour of the city or region" />
                                <FormControlLabel onChange={() => {this.handlea3()}} control={<Checkbox />} label="Try local cuisine and street food" />
                                <FormControlLabel onChange={() => {this.handlea4()}} control={<Checkbox />} label="Go shopping at traditional markets and shops" />
                                <FormControlLabel onChange={() => {this.handlea5()}} control={<Checkbox />} label="Take a day trip to nearby towns or villages" />
                                <FormControlLabel onChange={() => {this.handlea6()}} control={<Checkbox />} label="Experience traditional performances or festivals" />
                                <FormControlLabel onChange={() => {this.handlea7()}} control={<Checkbox />} label="Go hiking or camping in natural areas" />
                                <FormControlLabel onChange={() => {this.handlea8()}} control={<Checkbox />} label="Visit a national park or nature reserve" />
                                <FormControlLabel onChange={() => {this.handlea9()}} control={<Checkbox />} label=" Take a cooking class to learn about local cuisine" />
                                <FormControlLabel onChange={() => {this.handlea10()}} control={<Checkbox />} label="Go on a boat ride or cruise" />
                                <FormControlLabel onChange={() => {this.handlea11()}} control={<Checkbox />} label="Visit a museum or art gallery" />
                                <FormControlLabel onChange={() => {this.handlea12()}} control={<Checkbox />} label="Attend a concert or live music event" />
                                <FormControlLabel onChange={() => {this.handlea13()}} control={<Checkbox />} label="Take a spa or wellness treatment" />
                                <FormControlLabel onChange={() => {this.handlea14()}} control={<Checkbox />} label="Try a new adventure sport or activity, like paragliding or bungee jumping" />
                                <FormControlLabel onChange={() => {this.handlea15()}} control={<Checkbox />} label="Take a language class or conversation exchange to practice the local language" />
                            </FormGroup>

                            <div className="ButtonCont">
                                <div className="GoButton">
                                    <Button variant="contained" size='large' className='GoButtonStyle' onClick={() => {
                                        this.handleSearch()
                                        }
                                        }>Generate Itinerary</Button>
                                </div>
                                <div className="SurpriseButton">
                                    <Button variant="contained" size='large' className='GoButtonStyle' onClick={() => {this.handleCancel()}}>Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {this.state.popUpToggle ? (
                document.getElementsByClassName('Dark').style.visibility="visible"
            ) : null} */}
                <div className="SmallerTextAbs">
                    Travelogue
                </div>
                <div id='t1' lassName="Text">
                    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
                    {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Ready to plan your next trip? Enter destination below")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                    > */}
                    {/* <Typewriter
                    options={{
                        strings: ["Ready to plan your next trip? Enter destination below"],
                        autoStart: true,
                        loop: true
                    }}
                    /> */}
                        {/* Ready to plan your next trip? Enter destination below */}
                </div>
                <TextField id="outlined-basic" label="Destination Name" variant="outlined"
                sx={{
                    width: '60%',
                    marginTop: '2%',
                }} 
                onChange = {(e) => {
                    this.setState({loc: e.target.value})
                    this.props.handleLocation(this.state.loc)
                    }}/>
                <div className="ButtonCont">
                    <div className="GoButton">
                        <Button variant="contained" size='large' className='GoButtonStyle' onClick={() => {this.handlePopUp()}}>Search</Button>
                    </div>
                    {/* <div className="SurpriseButton">
                        <Button variant="contained" size='large' className='SurpriseButtonStyle'>Surprise Me!</Button>
                    </div> */}
                </div>
            </div>
            
        )
    }
}

export default SearchCont