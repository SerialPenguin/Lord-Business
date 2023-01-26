// import React, { useEffect } from "react";

// export default function Characters(){

//     //const [allPeople, setAllPeople] = React.useState(data.results.name)
    

//     // let buttons = document.querySelectorAll("button")
//     // // // // let category = ""

//     // buttons[0].addEventListener("click",() => {
//     //     // category = buttons[0].value
//     //     console.log(buttons[0].value)
//     // });

    

//     // const [characters, serCharacters]=useState([])

//     let fetchUrl = `https://swapi.dev/api/people/`
//     React.useEffect(() =>{
        
//         fetch(fetchUrl)
//         .then((res) => {
            
//             return res.json()
            
//         })
//         .then((data) => {
//             for(let i = 0; i < data.results.length; i ++)
//             console.log(data.results[i].name)
//             //console.log(data.results[i].height)
//             // console.log(data.results[i].mass + 'kg')
//         })

//         // fetch(`https://swapi.dev/api/people/?page=2`)
//         // .then((res) => {
            
//         //     return res.json()
            
//         // })
//         // .then((data) => {
//         //     for(let i = 0; i < data.results.length; i ++)
//         //     console.log(data.results[i].name)
//         //     //console.log(data.results[i].height)
//         //     // console.log(data.results[i].mass + 'kg')
//         // })

        

      

//     }, )


//     return (
//         <div></div>
//     )
        
    
// }