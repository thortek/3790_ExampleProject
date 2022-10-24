export async function getMovieDetails(movieID) {
    try {
        const data = new FormData()
        data.append(movieID)
        const res = await fetch(`/movies?/details`, {
            method: 'POST',
            body: data
})
        const movieData = await res.json()
        return movieData
    } catch (err) {
        console.error(err)
    }
}