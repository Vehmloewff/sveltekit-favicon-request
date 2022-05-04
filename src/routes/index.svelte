<script lang="ts">
	let post = '';
</script>

<input bind:value={post} />

<a href="/blog/{post}">Go to post</a>
