import { API_KEY, BASE_URL } from '../utils/fetchMovies'

var movie_poster = [];

const randomListToSearch = [
    "bad boys",
    "spiderman",
    "the shining",
    "se7en",
    "ice age",
    "sonic the hedgehog",
    "the avengers: endgame",
    "deadpool"
]

async function search(randomName, i) {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=*${randomName}*&page=${i}*`
    await fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var num = data.Search; //to get the length of response, sometimes its less than 10
        for(var j=0; j < num; j++){         
        movie_poster.push(data.Search[j]);
        }
        return movie_poster;    
    });
    return movie_poster;
};

//loop through search.
function fetchAll() {
    // var variable_from_html_search = document.querySelector(".search-input").value;

    for(var i=0; i < randomListToSearch.length; i++){
        movie_poster = search(randomListToSearch[i], i);
    }
}
 //movie_poster now has top 100 list and you can use it anywhere, remember to use JSON.stringify()

 export { fetchAll }