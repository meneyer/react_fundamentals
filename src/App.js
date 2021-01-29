//DAY 02 CHALLENGE
//Create a component named Contacts
//Pass name, age, school, graduationYear props into it
//Return an h3 tag with name, and a p with the remaining information

import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/Challenges/Day02/Contacts'
import State from "./components/State"


function App() {  
  const profile = {name: "Megs", age: 37, school: "Anderson University", graduationYear: 2005}
  return (      
    <div className="App">
      <NameProp name="Megs" />
      <NameProp name = "Alex"/>
      <NameProp name = "Zach"/>
      <p>----------------------------------------------------</p>
      {/* ANOTHER OPTION FOR THE PROFILE:
      <Contacts name = "Megs"  age = "37" school = "Anderson University" graduationYear = "2005" /> */}
      <Contacts {...profile} />
      <p>----------------------------------------------------</p>
      <State />
    </div>
  );
}


export default App;



// DAY 01 STUFF
// import './App.css';
// import Header from "./components/Header"
// import AboutMe from "./components/Challenges/Day01/AboutMe"
// import Footer from "./components/Footer"
// import Home from "./components/Home"

// function App() {  // this is the root component from the Index.js file from the HTML file;  This is the parent function
//   const name = "Megs"  //before return, you can use regular Javascript

//   return (      //after return, you have to use JSX
//     <div className="App">
//       {/* DAY 01 STUFF 
//       <h1>Welcome to React, {name}</h1>
//       <h2>We just modified our root App component</h2>
//       <Header/>  {/*this is how you mount a component -- this is the child function */}
//       <p>-------------------------------------------------------------------------</p>
//       <h2>CHALLENGE 1 - DAY 01</h2>
//       <p>Create a ./components/challenges/day01 folder</p>
//       <p>Create a component with and h1 tag of your name, p tag with description of yourself, and an unordered list of two truths and a lie.</p>
//       <p>Export, import into App, and mount it</p>    
//       <AboutMe />  {/*this is the child function of function App()*/}
//       <p>-------------------------------------------------------------------------</p>
//       <h2>CHALLENGE 2 - DAY 01</h2>
//       <p>Create Footer and Home components to round off the site</p>
//       <p>SPICY MODE: In your Footer, utilize JS time method to dynamically insert current date after Copyright</p>
//       <p>EXTRA: Have some fun with reactstrap if you're brave to utilize some additional elements -- you will need to install reactstrap for this to start to play with these</p>
//       <Home />
//       <Footer />    */}

      
//     </div>
//   );
// }


// export default App;

