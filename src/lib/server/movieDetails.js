import { OMDB_APIKEY } from '$env/static/private'

export async function getMovieDetails(movieId) {
    try {
        const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&i=${movieId}`)
        const movieData = await omdb_response.json()
        console.log(movieData)
    } catch (err) {
        console.error(err)
    }
}

/* const { lastName } = params
    const firstName = faker.name.firstName()
    console.log(params)
    return {
        lastName,
        firstName,
        avatar: `https://avatars.dicebear.com/api/adventurer/${lastName}.svg`,
        title: faker.name.jobTitle(),
        phone: faker.phone.number(),
        email: faker.internet.email(`${firstName}`, `${lastName}`)
    } */