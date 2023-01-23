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
    // const { response } = this.props
    console.log("In card area")
    console.log(this.props.response)
    return(
        <div id="ICMainCont" className="ICMainCont">
            {/* <div className="ICText">
                Your Itineraries
            </div> */}
            <Card response={" Day 1: * Arrive in Sydney and check into your hotel.* Visit the iconic Sydney Opera House and take a guided tour of the building.* Walk around The Rocks, a historic neighborhood with cobbled streets and 19th-century buildings.Day 2:* Take a guided tour of the Sydney Harbour Bridge and try bungee jumping or bridge climbing.* Visit the Australian Museum to learn about the country's Indigenous culture and history.* Try some local street food in Darling Harbour.Day 3:* Take a day trip to the Blue Mountains and go paragliding or hang gliding.* Visit the Three Sisters rock formation and take a guided tour of the area.* Try some local cuisine at a restaurant in Katoomba.Day 4:* Take a train to Melbourne and check into your hotel.* Visit the Melbourne Museum to learn about the city's history and culture.* Go shopping at the Queen Victoria Market, a large traditional market with a wide range of products.Day 5:* Take a guided tour of the city and visit some of Melbourne's famous street art.* Try some local street food in the laneways.* Go paragliding or hang gliding in the Yarra Valley. Day 6: * Take a train to Brisbane and check into your hotel.* Take a flight back home."} img="https://thumbs.dreamstime.com/b/sydney-opera-house-australia-14210813.jpg" loc="Australia"></Card>
            {this.props.loc != "" ? <Card response={this.props.response} img={"https://opentextbc.ca/introtourism2e/wp-content/uploads/sites/315/2021/06/Swingers-and-Spinners.jpg"} loc={this.props.loc}></Card> : null }
            {/* <Card response={this.props.response} img={"https://opentextbc.ca/introtourism2e/wp-content/uploads/sites/315/2021/06/Swingers-and-Spinners.jpg"} loc={this.props.loc}></Card> */}
            {/* <Card></Card>
            <Card></Card>
            <Card></Card> */}
            
        </div>
    )
}
}

export default ItenaryCont