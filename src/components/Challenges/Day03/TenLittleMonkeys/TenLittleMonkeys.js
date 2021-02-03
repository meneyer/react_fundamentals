// 10 Little Monkey Challenge
// Are you ready?
// Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
// There is no more monkeys jumping on the bed
// Otherwise you should display the following:
// 10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
// Create a new component
// use useState
// Initialize your monkey count to 10

import {useState} from "react";

const Monkeys = () => {
    const [count, setCount] = useState(10);

    function handleClick(){
        //Subtract Count
        if(count !==0){
            setCount(count-1);
        }
    }

    return(
        <div>
            <p>{count !== 0 ? `${count} little monkeys jumping on the bed.  One fell off and bumped his head. Momma called the doctor and the doctor said. "No more monkeys jumping on the bed!` : "No more monkeys jumping on the bed" } </p>
            <button onClick={handleClick}>Oh No, A Monkey Jumped!</button> 
        </div>
    )
}

export default Monkeys;

// the Ternary (?) is needed here -- item (if statement) ? if true, this shows : else this shows






// OPTION TWO

// import React, { useState } from "react";

// const Monkeys = () => {
//   const [monkeyCount, setMonkeyCount] = useState(10);
//   const [sentence, setSentence] = useState(
//     "monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed."
//   );

//   subtractMonkey = () => {
//     if (monkeyCount > 1) {
//       setMonkeyCount(monkeyCount - 1);
//     } else {
//       setMonkeyCount(0);
//       setSentence("There is no more monkeys jumping on the bed");
//     }
//   };

//   return (
//     <div>
//       Total Monkeys: {monkeyCount} <br />
//       <p>
//         {monkeyCount} {sentence}
//       </p>
//       <br />
//       <button onClick={subtractMonkey}>Click to Jump Monkeys</button>
//     </div>
//   );
// };

// export default Monkeys;