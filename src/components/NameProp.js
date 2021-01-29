//PROPS - (short for properties)
//Parameters of a component function that get passed into the component to aid in its reusability
//Dynamic data that can be assigned to child components 

//import React from 'react';

const NameProp = (props) => {  //property returning React element
    return  <h1>Hello, { props.name }</h1>
}

export default NameProp;

