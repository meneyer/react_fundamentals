//JavaScript object where property values of the component are stored
//Managed inside of the component, instead of being passed into it (like props)

import { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(4)  //[current value, update value -- always use set and then the 1st variable name]
    //useState is a Hook that must execute in the same order -- Hooks cannot be put inside of a loop/if statement/conditional/etc.

    //Another option if you want to see it in the console
    // const [count, setCount] = useState( () => {
    //     console.log ("Function Run")
    //     return 4
    // })  

    function decCount() {
        setCount(count-1)
    }

    function incCount(){
        setCount(count+1)
    }

    return (
        <>
        <button onClick={decCount}>-</button>  {/*onClick needs to be camelCased and the function needs to be in {curly} not (paranthesis) -- () might give you an infinite loop...so don't do that.  :)  */}
        <span> {count} </span>
        <button onClick={incCount}>+</button>
        </>
    )
}
export default State;