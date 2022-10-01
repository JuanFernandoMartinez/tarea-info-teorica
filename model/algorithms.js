import machine from './machineStored'

let reachableStates = ()=>{
    let aux = [machine.states[0].name]
    for (let i of machine.states){
        if (aux.indexOf(i.name) != -1){
            for (let j of i.reachableStates){
                aux.push(j)
            }

            aux = aux.filter( onlyUnique );
        }
    }

    return aux

    
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}




export default  reachableStates
