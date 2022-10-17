<script>
	import { getMovieDetails } from '$lib/server/movieDetails.js';
	export let form, errors;
	//$: console.log(form)
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
	{:else}
		{#each form as movie}
			<div class="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
					<a href="#">
						<form method="POST" action="?/details" use:enhance>
							<img src={movie.Poster} alt="Movie poster" />
						</form>
					</a>
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
