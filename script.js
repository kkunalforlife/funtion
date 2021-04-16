let movies = [
    {
        tile:"fight cliub",
        rank:"10",
        id: "1"
    },
    {
        tile:"fight cliub1",
        rank:"9",
        id: "2"
    },
    {
        tile:"fight cliub2",
        rank:"8",
        id: "3"
    },
    {
        tile:"fight cliub4",
        rank:"7",
        id: "4"
    },
    {
        tile:"fight cliub5",
        rank:"6",
        id: ""
    },
    {
        tile:"fight cliub7",
        rank:"4",
        id: "1"
    },
]



window.onload = function(){
    SortedMovies(movies)
}


function SortedMovies(movies){
    for (var j = 0 ; j<= movies.length ; j++){
        

        let max_obj = movies[j]
        let max_location = j

        for (var i= j ; i< movies.length ; i++){

            if (movies[i].rank > mox_obj.rank){
             max_obj = movies[i];
        let max_location = i;
            }    
    }
    }
        movies[max_location] = movies[j];
        movies[j] = max_num
        console.log(movies);
}