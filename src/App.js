//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Nav from './nav'
//import Hello from './hello'
import Logo from './logo'



class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Logo  />
                {/*<Hello  />*/}
                <Nav  />
            </div>
        );
    }
}

export default App;
