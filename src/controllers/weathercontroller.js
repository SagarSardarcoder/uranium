const axios = require('axios')

let getWeather = async function(req,res){
    try{
        let city = req.query.city
        let key = req.query.appid
        if(city && key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, msg: result.data})
    }else{
        res.status(400).send({status: false, msg: "Please provide valid city or key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}

let tempOfLondon = async function(req,res){
    try{
        let city =  req.query.city
        let key = req.query.appid
        if(key){
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true, temp: result.data.main.temp})
    }else{
        res.status(400).send({status: false, msg: "Please provide valid  key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}


let tempOfCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let key = req.query.appid
        if(key){

            let templist = []
            
            for(let i=0; i<cities.length; i++){
                let citiesName = {city:cities[i]}
                let options = {
                    method : "GET",
                    url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
                }
                let result = await axios (options)
                citiesName.temp = result.data.main.temp
                  templist.push(citiesName)  
            }
        
           let result = templist.sort((a,b)=>{a.temp - b.temp})
               
            res.status(200).send({status: true, data: result})
        }else{
            res.status(400).send({status: false, msg: "please provide valid key"})
        }

    }catch(error){
        res.status(500).send({error : error.message})
    }
}

module.exports.getWeather = getWeather
module.exports.tempOfLondon = tempOfLondon
module.exports.tempOfCities = tempOfCities