<script>
	import '../app.css';
	import Header from '../lib/components/header/Header.svelte';

	export const csr = false;
	export const prerender = true;
</script>

<div data-theme="light" class="h-screen">
	<Header />

	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content sticky top-[100vh]">
		<div>
			<p>Copyright © 2022 Thor Anderson Designs</p>
		</div>
	</footer>
</div>
