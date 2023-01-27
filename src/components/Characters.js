// import React from "react";

// export default function Characters(){

//     //const [allPeople, setAllPeople] = React.useState(data.results.name)


//     React.useEffect(() =>{
        
//         fetch(`https://swapi.dev/api/people/`)
//         .then((res) => {
            
//             return res.json()
            
//         })
//         .then((data) => {
//             for(let i = 0; i < data.results.length; i ++)
//             console.log('Name: ' + data.results[i].name)
//             //console.log(data.results[i].height)
//             // console.log(data.results[i].mass + 'kg')
//         })

//         fetch(`https://swapi.dev/api/people/?page=2`)
//         .then((res) => {
            
//             return res.json()
            
//         })
//         .then((data) => {
//             for(let i = 0; i < data.results.length; i ++)
//             // console.log(data.results[i].name)
//             console.log('Height: ' + data.results[i].height + 'cm')
//             // console.log(data.results[i].mass + 'kg')
//         })

//         fetch(`https://swapi.dev/api/people/?page=3`)
//         .then((res) => {
            
//             return res.json()
            
//         })
//         .then((data) => {
//             for(let i = 0; i < data.results.length; i ++)
//             // console.log(data.results[i].name)
//             //console.log(data.results[i].height)
//             console.log('Weight: ' + data.results[i].mass + 'kg')
//         })

      

//     },[] )


//     return (
//         <div></div>
//     )
// }