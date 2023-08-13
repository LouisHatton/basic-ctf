<script lang="ts">
	let username: string;
	let password: string;
	let isError: boolean;
	let returnedData: unknown;

	async function onSubmit() {
		isError = false;
		returnedData = 'loading';
		try {
			const res = await fetch('/vault/get', {
				method: 'POST',
				body: JSON.stringify({
					username,
					password
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			});

			returnedData = await res.json();
		} catch (err: unknown) {
			isError = true;
		}
	}
</script>

<div class="py-28">
	<div class="max-w-md mx-auto">
		<h1 class="text-2xl">My Password Vault</h1>
		<p class="mt-3">
			This is my <span class="bg-cyan-400/30">super secret</span> password vault, a quick way for me
			to check if I have used a username/password combination before.
		</p>
		<p class="mt-3">
			Good luck trying to guess my passwords, they are (almost) all randomly generated!
		</p>
		<form class="form-control w-full max-w-lg mx-auto flex my-4">
			<label class="label" for="email-input">
				<span class="label-text">Username:</span>
			</label>
			<input
				bind:value={username}
				id="email-input"
				type="text"
				placeholder="admin"
				class="input input-bordered w-full"
			/>
			<label class="label" for="email-input">
				<span class="label-text">Password:</span>
			</label>
			<input
				bind:value={password}
				id="email-input"
				type="text"
				placeholder="********"
				class="input input-bordered w-full"
			/>
			<button class="btn btn-neutral mt-4" on:click={onSubmit}>Check</button>
		</form>
	</div>
	<div class="max-w-3xl mx-auto pt-12">
		<pre>{JSON.stringify(returnedData, undefined, 2)}</pre>
	</div>
</div>
