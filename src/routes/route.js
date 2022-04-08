const express = require('express');
const router = express.Router();

const movielist = ["justice league", "the shining", "lord of the rings", "bartman begins","avengers"]

router.get('/movies', function (req, res) {
    
        const result = movielist.toString();
          res.send(result) 
});
router.get('/movies/:indexNumber',function(req,res){
    let nameOfMovie = ""
    if(req.params.indexNumber > movielist.length -1){
        nameOfMovie = "use a valid index"
    }else{
           nameOfMovie =  movielist[req.params.indexNumber]
    }   
    res.send(nameOfMovie)
});

router.get('/films',function(req,res){
   const lists = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
        res.send(lists)
});
router.get('/films/:filmId',function(req,res){
    const lists = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
   let nameOFFilm = "";
    for(i = 0;i < lists.length;i++){
        if(lists[i].id == req.params.filmId){
            nameOFFilm = lists[i].name
            break;
        } 
        else{
            nameOFFilm = "No movie exists with this id"
        }
    }  
    res.send(nameOFFilm)
});







module.exports = router;
// adding this comment for no reason