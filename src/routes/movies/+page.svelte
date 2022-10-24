<script>
	import { getMovieDetails} from '$lib/api/movieDetails'
	export let data, form, errors;
	$: console.log(data)
	async function getDetails(movieID) {
		console.log(movieID)
		const selectedMovie = await getMovieDetails('posterMovieID', movieID)
		console.log(selectedMovie)
	}
</script>

{#if errors?.title}
	<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
	{#if !form}
		<div class="card">
			<div class="card-body">
				<!-- <img src="/images/adventurer.svg" alt="Adventurer"/> -->
				<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
			</div>
		</div>
	{:else if form.length > 0 }
		{#each form as movie}
			<div class="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
 					<form
					id="posterForm"
						on:submit|preventDefault={getDetails(movie.imdbID)}
					>
						<input
							type="image"
							name="posterMovieID"
							id="posterMovieID"
							src={movie.Poster}
							alt="Movie poster"
						/>
					</form>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{movie.Title}</h2>
					<p>{movie.Year}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</main>
