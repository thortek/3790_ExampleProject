<script>
	import { enhance } from '$app/forms'

    const credentials = {
		firstName: '',
		lastName: '',
        email: '',
        password: ''
    }

</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-400">
			<form class="card-body" method="POST" action="/auth?/signup" use:enhance>
				<div class="form-control">
                    <h1 class="text-4xl font-bold m-4">Sign up</h1>
                    <h4 class="m-2">Sign up to experience my demo app</h4>
					<label class="label" for="firstName">First name</label>
                    <input class="input input-bordered input-lg w-96" type="text" name="firstName" placeholder="First name" required autocomplete="name" minlength="2" maxlength="80" bind:value={credentials.firstName}/>
					<label class="label" for="lastName">Last name</label>
                    <input class="input input-bordered input-lg w-96" type="text" name="lastName" placeholder="Last name" required autocomplete="name" minlength="2" maxlength="80" bind:value={credentials.lastName}/>
                    <label class="label" for="email">Email Address</label>
					<input
						class="input input-bordered input-lg w-96"
						type="email"
						name="email"
						placeholder="Email"
                        required
                        autocomplete="email"
                        bind:value={credentials.email}
					/>
                    <label class="label" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="80" bind:value={credentials.password}/>
                    <button class="btn btn-primary btn-lg mt-8" type="submit">Sign up</button>
				</div>
			</form>
		</div>
	</div>
</div>
