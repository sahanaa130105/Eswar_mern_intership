import React, { useReducer } from 'react';

const colors = {
    V: 'violet',
    I: 'indigo',
    B: 'blue',
    G: 'green',
    Y: 'yellow',
    O: 'orange',
    R: 'red',
};

const colorReducer = (state, action) => {
    switch (action.type) {
        case 'V':
            return colors.V;
        case 'I':
            return colors.I;
        case 'B':
            return colors.B;
        case 'G':
            return colors.G;
        case 'Y':
            return colors.Y;
        case 'O':
            return colors.O;
        case 'R':
            return colors.R;
        default:
            return 'white';
    }
};

export const Usereducer4 = () => {
    const [state, dispatch] = useReducer(colorReducer, 'white');

    const handleColorChange = () => {
        const input = prompt("Choose a color letter from VIBGYOR:").toUpperCase();
        if (colors[input]) {
            dispatch({ type: input });
        } else {
            alert("Invalid input! Please enter a letter from VIBGYOR.");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div id='clr' style={{ width: '200px', height: '50px', backgroundColor: state, margin: 'auto', border: '1px solid black'}}>
            </div>
            <button onClick={handleColorChange} style={{ padding: '10px', marginTop: '20px', fontSize: '16px' }}>Choose Color</button>
        </div>
    );
};










// import React from 'react'
// import { useReducer } from 'react'
// function reducerfunction(state,action){
//   switch(action.type){
//     case "v":
//       return {result:"Violet"}
//     case "i":
//       return{result:"Indigo"}
//     case "b":
//       return{result:"Blue"}
//     case "g":
//       return{result:"Green"}
//     case "y":
//       return{result:"Yellow"}
//     case "o":
//       return{result:"Orange"}
//     case "r":
//       return{result:"Red"}
//     default:
//       return {result:"Default"}
// }
// }
// export const Usereducer4 = () => {
//     const result=""
//     const [state,dispatch]=useReducer(reducerfunction,{result})

//     function rainbow(){
//       const a = document.getElementById("lab").value
//       dispatch({type:a})
//     }
//    return (
//     <div>
//      <input id="lab" placeholder="Enter a letter (v, i, b, g, y, o, r)" ></input>
//      <button onClick={rainbow}>SUBMIT</button> 
//      <h1 id="res">{state.result}</h1>  
//     </div>
//   )
// }








// import React, { useReducer } from 'react';

// const ACTIONS = {
//   V: "Violet",
//   I: "Indigo",
//   B: "Blue",
//   G: "Green",
//   Y: "Yellow",
//   O: "Orange",
//   R: "Red"
// };


// function reducerfunction(state, action) {
//   switch (action.type) {
//     case "V":
//       return { color: ACTIONS.V };
//     case "I":
//       return { color: ACTIONS.I };
//     case "B":
//       return { color: ACTIONS.B };
//     case "G":
//       return { color: ACTIONS.G };
//     case "Y":
//       return { color: ACTIONS.Y };
//     case "O":
//       return { color: ACTIONS.O };
//     case "R":
//       return { color: ACTIONS.R };
//     default:
//       alert("Invalid input!");
//       return state;
//   }
// }

// export const Usereducer4 = () => {
//   const [state, dispatch] = useReducer(reducerfunction, { color: "White" });

//   function changeColor() {
//     const color = prompt("Enter the first letter of a rainbow color:").toUpperCase();
//     dispatch({ type: color }); 
//   }

//   return (
//     <div >
//       <h1>{state.color}</h1>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// };
