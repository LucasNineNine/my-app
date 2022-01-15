import React from 'react'
import logo from './logo192.png'

class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>    
        )
    }
}

export default Logo