import { OMDB_APIKEY } from '$env/static/private'

let allMovies = []

export async function GET() {
    let movieData
    let searchTerms = 'Avengers'
    try {
        const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}`)
        movieData = await omdb_response.json()
        allMovies = await getAllMovies(movieData, searchTerms)
        console.log(allMovies)
    } catch (err) {
        console.error(err)
    }

    return new Response(JSON.stringify({ movies: allMovies }), {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
}

async function getAllMovies(pageOne, searchTerms) {
    let allTheMovies = []
    // console.log(pageOne)
    const totalResults = parseInt(pageOne.totalResults)
    //console.log(totalResults)
    if(totalResults === 0) return // should probably let user know "No results"
    if (totalResults > 0 && totalResults < 11) {
        return pageOne.Search // return just the array of the results
    }
    allTheMovies = [...pageOne.Search]
    // figure out how many times to loop
    let counter = Math.ceil(totalResults / 10)
    for (let i = 2; i <= counter; i++) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}&page=${i}`)
            const pageData = await response.json()
            //console.log(pageData)
            allTheMovies = [...allTheMovies, ...pageData.Search]
        }
        catch (err) {
            console.error(err)
        }
    }
    return allTheMovies
}