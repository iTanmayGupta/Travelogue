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
                <div className="ImgCont">
                    <img className="Img" src={'https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-8.jpg'}></img>
                </div>
                <div className="DescCont">
                    <div className="BigText"> Trip to Niagara </div>
                    <div className="tags">7 day trip</div>
                </div>
            </div>
        )
    }
}

export default Card