<script lang="ts">
	export let src: string;
	export let title: string;
	export let body: string;
	export let action: string;
	export let href: string;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure><img {src} alt={title} class="h-52 w-full object-fill" /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{body}</p>
		<div class="card-actions justify-end">
			<a {href} class="btn btn-primary">{action}</a>
		</div>
	</div>
</div>
