<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	const load: Load = ({ params }) => {
		return { props: params };
	};
</script>

<script lang="ts">
	export let post: string;
</script>

Hello, this is post {post}

<a href="/">Back</a>
