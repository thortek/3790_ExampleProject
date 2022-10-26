<script>
	export let movieDetails, showModal, toggleModal
</script>

<div class="modal" class:modal-open={showModal}>
	<div class="modal-box">
		<h3 class="font-bold text-lg text-center">{movieDetails.Title}</h3>
		
		<p class="py-4 text-base text-blue-800">{movieDetails.Plot}
		</p>
		<p class="py-2 text-sm text-green-900">Actors: {movieDetails.Actors}
		</p>
		<p class="py-2 text-sm text-red-900">Director: {movieDetails.Director}
		</p>
		<h2 class="text-base text-gray-700">{movieDetails.Year}</h2>
		<div class="modal-action">
			<label for="my-modal" class="btn btn-primary" on:click={toggleModal} on:keyup={toggleModal}>Close</label>
		</div>
	</div>
</div>
