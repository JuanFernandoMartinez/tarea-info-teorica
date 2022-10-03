var machine


if (!machine){
    machine = 
        {
            name: "M1",
            statesList: ['D','E','F','G','H','J'],
            states:[
                {
                    name: 'D',
                    reachableStates: ['E','D'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'E',
                            output: '0'
                        },
                        {
                            character: '1',
                            transition: 'D',
                            output: '0'
                        }

                    ]
                },
                {
                    name: 'E',
                    reachableStates: ['D','F'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'D',
                            output: '0'
                        },
                        {
                            character: '1',
                            transition: 'F',
                            output: '1'
                        }

                    ]

                },
                {
                    name: 'F',
                    reachableStates: ['F','D'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'F',
                            output: '1'
                        },
                        {
                            character: '1',
                            transition: 'D',
                            output: '1'
                        }

                    ]

                },
                {
                    name: 'G',
                    reachableStates: ['E','H'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'E',
                            output: '0'
                        },
                        {
                            character: '1',
                            transition: 'H',
                            output: '1'
                        }

                    ]

                },
                {
                    name: 'H',
                    reachableStates: ['D','G'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'D',
                            output: '1'
                        },
                        {
                            character: '1',
                            transition: 'G',
                            output: '0'
                        }

                    ]

                },
                {
                    name: 'J',
                    reachableStates: ['F','G'],
                    transitions: [
                        {
                            character: '0',
                            transition: 'F',
                            output: '0'
                        },
                        {
                            character: '1',
                            transition: 'G',
                            output: '1'
                        }

                    ]

                }
            ]
        }
    
}




export default machine