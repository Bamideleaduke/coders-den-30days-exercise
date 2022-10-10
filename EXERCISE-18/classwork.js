// Filter the countries by continent and arrange them in ascending order by their population, You can make the second parameter of that function an array that contains all the continents, Then use recursion to return an object that has its keys as the continents and the values of those keys will be an array of Objects of the country data that are present in that continent

let url = 'https://restcountries.com/v3.1/all';
const fetchData = async () =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
       const getContinent = (data,continents) =>{
        return data.filter(ele =>{
            return  ele.continents[0] === continents;
           }).sort((a,b)=> a.population - b.population);
       }
       console.log(getContinent(data,'North America'))
       console.log(getContinent(data,'Europe'))
        // for(let item of data){
        //     continent.push(item.continents[0])
        //     console.log(item.name.common)
        // }
        // // console.log(continent)
        // console.log(data)
        // const continent = data.map(dd => dd.continents);
        // console.log(continent)
        // const filC = data.reduce((ac,cr) =>{
        //    return [...ac,cr.continents];
        // Object.values(cr.continents)
        // },[])
        // const ch = filC.reduce((acc,curr)=>{
        //     return acc
        // },{})
        // console.log(filC)
        // console.log(data)
    }catch(err){
      console.log('rejected',err);
    }
}
fetchData()