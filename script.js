//Get all the countries from the Asia continent /region using the Filter function


const request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all')
request.send();
request.onload=function(){
    const countries =JSON.parse(request.response)
            let asianCountries = countries.filter((element)=>element.region === 'Asia');
    console.log(asianCountries)
}

//Get all the countries with a population of less than 2 lakhs using Filter function

const request =new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    const countries = JSON.parse(request.response)
    let lessThan2LackCountris=countries.filter((element)=> element.population<200000)
    console.log(lessThan2LackCountris)
}

//Print the following details name, capital, flag using forEach function

const request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all');
request.send(null);
request.onload=function(){
    const countries = JSON.parse(request.response)
    let details = countries.forEach((element)=>{
       console.log(`Country Name : ${element.name.common} / County Capital : ${element.capital[0]} / Country Flag : ${element.flag} `)
     })
    console.log(details)
}


//Print the total population of countries using reduce function

const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send(null);
request.onload=function(){

   let countries =JSON.parse(request.response)
  const totalPopulation = countries.reduce((a,b) =>{ 
    return a + b.population },0)
  console.log(`Total Population Of Countris : ${totalPopulation}`)
 
}

// Print the country which uses US Dollars as currency.


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all?fields=name,currencies");
request.send(); 
request.onload=function(){
    let result=[];
    let data=JSON.parse(request.response);
    for(let i of Object.keys(data)){
        if(data[i].hasOwnProperty('currencies'))
        {
            if(data[i].currencies[0].code==='USD')
            {
                result.push(data[i].name);
            }
        }
    }
    console.log("The country which uses US Dollars as currency : ",result); 
};