<script>
	import MovieModal from '../../lib/components/MovieModal/MovieModal.svelte'
	import { enhance } from '$app/forms'
	export let form, errors
	
	let showModal = false
	let movieDetails = {}

	function toggleModal() {
		showModal = !showModal
	}

	const getMovieDetails = () => {
		return async ({ result }) => {
			movieDetails = await result.data
			toggleModal()
		}
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
 					<form id="posterForm" method="POST" action="?/details" use:enhance={getMovieDetails}>
						<input
							type="image"
							name="movieID"
							value={movie.imdbID}
							id="posterMovieID"
							src={movie.Poster}
							alt="Submit"
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

		<MovieModal {movieDetails} {showModal} {toggleModal}/>
	
</main>
