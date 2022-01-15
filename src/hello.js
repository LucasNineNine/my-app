import React from 'react'

const nome = 'Lucas'

const element = React.createElement('h1', {className: 'header1 todos'}, 'Hello, World!')

const element3 = <h3 className="titulo-3 todos">Hello, {nome}!</h3>

function Appy(){
    const element4 = React.createElement('h4', {className: 'appy todos'}, 'Hey!')
    return(
        <div>
            {element4}
        </div>
    )
}

class Hello extends React.Component{
    render(){
        return(
            <header className="App-header">
                <div className="header-div">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {element}
                    <h2 className="todos">
                        Hello, React!
                    </h2>
                    {element3}
                    <Appy />
                </div>
            </header>
        )
    }
}

export default Hello