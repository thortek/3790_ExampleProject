import { NEWS_APIKEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

//https://api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=YOUR_API_TOKEN

export async function load() {
    try {
        const news_response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        const news_data = await news_response.json()
        const allTopStories = await getAllTopStories(news_data)
        return allTopStories
    } catch (err) {
        throw error(404, 'Not found')
    }
}

async function getAllTopStories(topStoryIDArray) {
    let allTopStories = []

    //console.log(topStoryIDArray.length)
    /* 
    if(totalResults === 0) return // should probably let user know "No results"
    if (totalResults > 0 && totalResults < 11) {
        return pageOne.Search // return just the array of the results
    }
    allTheMovies = [...pageOne.Search]
    // figure out how many times to loop
    let counter = Math.ceil(totalResults / 10)
     */
    topStoryIDArray.forEach(async element => {
        console.log(element, typeof(element))
/*         try {
            const article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`)
            const articleData = await article.json()
            console.log(articleData)
            //allTheMovies = [...allTopStories, ...pageData.Search]
        }
        catch (err) {
            console.error(err)
        } */
    })
    return allTopStories
    //return allTheMovies.filter(movie => (movie.Type === 'movie' && movie.Poster !== 'N/A'))
}