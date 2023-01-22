import './SearchBar.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
class SearchCont extends React.Component{
    constructor(props){
        super(props);
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
                        <Button variant="contained" size='large' className='GoButtonStyle' onClick={() => { }}>Search</Button>
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