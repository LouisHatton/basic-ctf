<script lang="ts">
	import '../app.css';

	let theme: 'dark' | 'light' = 'light';
</script>

<div data-theme={theme}>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost normal-case text-xl">Hugo Woods</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/">Home</a></li>
				<li><a href="/#my-projects">My Projects</a></li>
				<li><a href="/#work-experience">Work Experience</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a class="btn btn-accent" href="/#contact-me">Contact Me</a>
		</div>
	</div>
	<slot />
</div>
