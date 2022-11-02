<script>
	import { onMount } from 'svelte'
    import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

	let allPokemon = []

	onMount(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
		const pokeCount = await res.json()
		// get the pokemon id from the url property and add it as a property of the pokemon
		allPokemon = pokeCount.results.map(pokemon => {
			pokemon.id = pokemon.url.slice(34, pokemon.url.lastIndexOf('/'))
			return pokemon
		})
	})

</script>

<h1>Pokemon</h1>

<div class="w-full grid grid-cols-6 gap-2">
	{#each allPokemon as pokemon}
		<figure class="m-2">
			<ImageLoader src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt={`Image of ${pokemon.name}`}></ImageLoader>
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div>