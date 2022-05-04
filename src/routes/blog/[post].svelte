<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params }) => {
		return { props: { id: params.post } };
	};
</script>

<script lang="ts">
	export let id: string;

	let text: string | null = null;

	$: fetch(`http://localhost:3000/blog/${id}.json`)
		.then((res) => res.json())
		.then((data) => (text = data.text));
</script>

View page for {id}

<a href="/">Back</a>

<hr />

{#if !text}
	Loading
{:else}
	{text}
{/if}
