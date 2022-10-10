console.log("Hello")
const doSomething = callback =>{
    setTimeout(()=>{
        const skills =['HTML','CSS','JAVASCIPT'];
        callback(false,skills);
    },2000);
}
    // creating a callback function
    const callback = (err,result)=>{
        if(err){
         return   console.log(err)
        }else{
         return   console.log(result)
        }
    }
(doSomething(callback))
// 

const tryPromise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        const obj = {name:'Asa',age:11};
        if(obj.hasOwnProperty('age')){
            resolve(obj)
        }else;{
            reject('Something is wrong')
        }
    },2000)
})
tryPromise.then(result=>{console.log(result)}).catch(error => console.log(error))
// Exercises
// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    // console.log(data)
    // countInner = data.map(ele =>{
    //     const countryName =  ele.name;
    //     const countryPop = ele.population
    //     return countryPop
    // })
    // console.log("Countries",countInner.sort())
    let dd = [];
   for(let {name,population,languages} of data){
     dd.push({"Country":name,"Population":population,"Languages":languages })
        }
  let dap = dd.sort((a,b)=> b.Population - a.Population).slice(0,10);
    console.log(dap)
})
.catch(error=>console.log(error))
// function getCount(){
// }
// fetch('https://restcountries.eu/rest/v2/all').then((response)=>
// { 
//     // console.log('resolved',response)
//   return console.log(response.json())
// }
// ).then(data=> {
//     console.log('resolved',data);
// }).catch((err)=>{
//     console.log("rejected",err)
// })
// async await

// Exercises: Level 2
// Print out all the cat names in to catNames variable.
function fetchCatName() {
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(response=>{
        if(!response.ok){
         throw Error('ERROR')
        }
       return response.json();
    })
    .then(data => {
        const innermap = data.map(user =>{
          return  user.name;
        })
        console.log('Cat-Names',innermap)
        // document.querySelector('#app').insertAdjacentHTML("afterbegin",'<h2>Hello</h2>');
    })
    .catch(error => console.log(error))
}
fetchCatName();
// 
// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () =>{
    try{
        const response = await fetch(catsAPI);
        const catt = await response.json();
        const innerp = catt.map(user =>{
            return user.weight.metric;
        })
        const inner = innerp.reduce((ac,cr)=>{
            return (
                ac[cr] ? ac[cr]++ : (ac[cr] = 1),ac
                ); 
            },{});
    console.log('Cat-Weight in metric',inner);
    }catch(err){
      console.log('rejected',err);
    }
}
fetchData()
// const finalVal = async () =>{
//     const value = await fetchData();
//     const red = value.reduce((ac,cr)=>{
//         return (ac[cr] ? ac[cr]++ : (ac[cr] = 1),ac);
//     },{})
//     return red
// } 
// console.log(finalVal())
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
// 🎉 CONGRATULATIONS ! 🎉