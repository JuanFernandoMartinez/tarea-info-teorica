import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default class MealyMachine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            states: [],
            campoEstado: "",
            datos: []
        }
    }

    

    onChangeState = e =>{
        this.setState({
            campoEstado : e.target.value
        })
    }

    addNewState = e =>{
        e.preventDefault()
        if (this.state.campoEstado != ""){
            let aux = this.state.states
        aux.push(this.state.campoEstado)

        this.setState({
            states: aux,
            campoEstado: ""
        })
        }

        let matrix = []
        for (let i = 0; i < this.state.states.length; i++){
            let auxArr = []
            for (let j = 0; j < this.state.states.length; j++){
                auxArr.push(["",""])
            }
            matrix.push(auxArr)
        }

        this.setState({
            datos: matrix
        })

        
    }




    handleChangeCell = e=>{
        let names = e.target.name.split(",")
        let states = this.state.states
        let index = Number(names[2])
        let indexes = [states.indexOf(names[0]),states.indexOf(names[1])]
        

        let dt = this.state.datos
        dt[indexes[0]][indexes[1]][index] = e.target.value
        
        this.setState({
            datos: dt
        })

        
    }
    
    render(){
        return (
            <div>
            
        <div>

            
            
                
        </div>

        
                    
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">States</TableCell>
            {this.state.states.map(e=><TableCell align="center">
                {e}
            </TableCell>)}
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.states.map(e=><TableRow  key={e} >
            <TableCell align="center">{e}</TableCell>
            {this.state.states.map(i=><TableCell key={i} align='center'>
                <TextField label="Entrada" name = {e+","+i+",0"} onChange = {this.handleChangeCell}></TextField>
                <TextField label="Salida" name = {e+","+i+",1"} onChange = {this.handleChangeCell}></TextField>
            </TableCell>)}
          </TableRow>)}
          <TableRow>
            <TableCell align='center'>
            <form onSubmit={this.addNewState}>
            <TextField label ="Nuevo estado" onChange={this.onChangeState} value = {this.state.campoEstado} > </TextField>
            </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
            </TableContainer>
        </div>
            <Button variant = "contained" color="success">Enviar datos</Button>
        </div>
            
            )
        
    }
}


