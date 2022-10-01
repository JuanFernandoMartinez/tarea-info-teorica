import React from "react";

export default class StateMachine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            alphabet : [],
            campoCaracter: ""
        }
    }

    onChangeCharacter = e=>{
        this.setState({
            campoCaracter: e.target.value
        })

        console.log(this.state.campoCaracter)
    }

    addNewCharacter = e=>{
        let aux = this.state.alphabet

        aux.push(this.state.campoCaracter)

        this.setState({
            alphabet: aux,
            campoCaracter: ""
        })
    }
    render(){
        return <div>
            <input type = "text" placeholder = "Caracter nuevo" onChange={this.onChangeCharacter} value = {this.state.campoCaracter}></input>
            <button onClick = {this.addNewCharacter}>Agregar Caracter </button>


            <ul>
                {this.state.alphabet.map(e=><li>
                    {e}
                </li>)}
            </ul>
        </div>
    }
}


