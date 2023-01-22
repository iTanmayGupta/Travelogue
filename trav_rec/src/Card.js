import './Card.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }

    render(){
        // this.setState({res: this.props.response})
        return(
            <div id="c1" className="CMainCont" onChange={() => {document.getElementById("c1").style.visibility = 'visible'}}>
                <div className="ImgCont">
                    <img className="Img" src={'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs='}></img>
                    {/* <img className="Img" src={this.props.img}></img> */}
                </div>
                <div className="DescCont">
                    <div className="BigText"> Trip to Rome </div>
                    <div className="tags">{this.props.response}</div>
                </div>
            </div>
        )
    }
}

export default Card