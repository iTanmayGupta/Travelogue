import './Card.css';
import React, { Text } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { style } from '@mui/system';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: ""
        }
    }

    handleLines = (l) => {
        var t1 = document.getElementById('t1')
        for (var i = 0; i < l.length; i++){
            t1.innerHTML = t1.innerHTML + l[i]
        }
    }

    render(){
        // this.setState({res: this.props.response})
        console.log(this.props.response.split('*'))
        const temp = ""
        return(
            <div id="c1" className="CMainCont">
                <div className="ImgCont">
                    {/* <img className="Img" src={'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs='}></img> */}
                    <img className="Img" src={this.props.img}></img>
                </div>
                <div className="DescCont">
                    <div className="BigText"> Trip to {this.props.loc}</div>
                    {/* <div id= 't1' className="tags">{
                        this.handleLines(this.props.response.split(':'))
                        }</div> */}
                    <div id= 't1' className="tags">{this.props.response}</div>
                </div>
            </div>
        )
    }
}

export default Card