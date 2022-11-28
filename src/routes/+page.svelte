<script>
  import { goto } from '$app/navigation'

  function navigate() {
    goto('/auth/login')
  }
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Welcome to my DGM 3790 SvelteKit Project!  Check out the menu items to see all the cool stuff I've built.</p>
        <button class="btn btn-primary" on:click="{navigate}">Get Started</button>
      </div>
    </div>
  </div>
