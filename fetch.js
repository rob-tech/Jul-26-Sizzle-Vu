getMovies = async () => {
    let url = ` https://strive-school-testing-apis.herokuapp.com/api/movies/`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + 'dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ==')
    var response = await fetch(url, { method: 'GET', headers: headers });
    response = await response.json();
    return response

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