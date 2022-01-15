//import logo from './logo.svg';
//import Hello from './hello'
import './App.css';
import React from 'react'
import Nav from './nav'
import Logo from './logo'

const tempoElement = <h5>It is {new Date().toLocaleTimeString()}</h5>

function Tempo() {
    <div>
        {tempoElement}
    </div>
}

setInterval(Tempo, 1000)

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Logo  />
                {/*<Hello  />*/}
                <Nav  />
                <Tempo />
            </div>
        );
    }
}

export default App;
