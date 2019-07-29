const url = `https://strive-school-testing-apis.herokuapp.com/api/movies/`
let headers = new Headers();
headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
headers.set("Content-Type","application/json")


getCategories = async () => {
    var response = await fetch(url, { method: 'GET', headers: headers });
    response = await response.json();
    return response   
}

addMovies = async newMovie => {
    var response = await fetch(url, {method: 'POST', body: JSON.stringify(newMovie), headers:headers})
    response = await response.json();
    return response
}

getMovies = async category => {
    var response = await fetch(url + category, { method: 'GET', headers: headers });
    response = await response.json();
    return response   
}

deleteMovies = async id => {
    await fetch(url + id, { method: 'DELETE', headers: headers });
 
}




// getMovie = async id => {
//     let url = `https://strive-school-testing-apis.herokuapp.com/api/movies/${id}`
//     let headers = new Headers();
//     headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
//     var response = await fetch(url);
//     return await response.json();

// }

// getMovieCat = async id => {
//     let url = `https://strive-school-testing-apis.herokuapp.com/api/movies/${category}`
//     let headers = new Headers();
//     headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
//     var response = await fetch(url);
//     return await response.json();

// }