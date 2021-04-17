var movies = [
    {
        title:"fight cliub",
        rank:10,
        id: "1"
    },
    {
        title:"fight cliub1",
        rank:9,
        id: "2"
    },
    {
        title:"fight cliub2",
        rank:8,
        id: "3"
    },
    {
        title:"fight cliub4",
        rank:7,
        id: "4"
    },
    {
        title:"fight cliub5",
        rank:6,
        id: "2"
    },
    {
        title:"fight cliub7",
        rank:4,
        id: "1"
    }
]



window.onload = function(){
 // let sortMovies =  SortedMovies(movies)
 let sortMovies = SortmoviesATTR(movies , 'title')  
 DisplayMovies(sortMovies);
}


function SortedMovies(movies){
    for (let j = 0 ; j<= movies.length ; j++){
        

        let max_obj = movies[j];
        let max_location = j;
       

        for (var i= j ; i< movies.length ; i++){

            if (movies[i].rank > max_obj.rank){
             max_obj = movies[i]
             let max_location = i;
            }    
    }
    
        movies[max_location] = movies[j]
        movies[j] = max_obj;
       console.log(movies[j].rank);
        return movies;
}
}

function DisplayMovies(movies){
    let table ="<table boder  = '1' style='width: 100%' align-content: 'center'>'";
    for (let index = 0 ; index < movies.length; index++){
    table += "<tr><th>id</th><th>title</th><th>rank</th>"
    table +="<tr>" ;
    table += "<td>" +movies[index].id +"</td>";
    table += "<td>" +movies[index].title +"</td>";
    table += "<td>" +movies[index].rank +"</td>";
    table += "'</tr>"
  document.getElementById("Movie-list").innerHTML = table; 
}
}


function SortmoviesATTR(movies ,sortattr){
    for (let j = 0 ; j<= movies.length ; j++){
        

        let max_obj = movies[j];
        let max_location = j;
       

        for (var i= j ; i< movies.length ; i++){

            if (movies[i][sortattr]> max_obj[sortattr]){
             max_obj = movies[i]
             let max_location = i;
            }    
    }
    
        movies[max_location] = movies[j]
        movies[j] = max_obj;
       console.log(movies[j][sortattr]);
        return movies;
    }
}
