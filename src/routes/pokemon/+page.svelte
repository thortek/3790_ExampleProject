<script>
	import { onMount } from 'svelte'
	import { each } from 'svelte/internal'
	import Layout from '../+layout.svelte'
	import Header from '../../lib/components/header/Header.svelte'
    import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

	let allPokemon = []

	onMount(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
		const pokeCount = await res.json()
        console.log(pokeCount.results)
        allPokemon = pokeCount.results
	})
</script>

<h1>Pokemon</h1>

<div class="w-full grid grid-cols-8 gap-2">
	{#each allPokemon as pokemon}
		<figure class="w-full m-0">
			<ImageLoader class="w-full m-0" src={`https://via.placeholder.com/150/92c952`} alt={`Image of ${pokemon.name}`}></ImageLoader>
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div>
