<script>
	let { index, n } = $props();

	function logRender () {
		console.log(`${index}: render ${n}`);
		return index;
	}

	$effect.pre(() => {
		console.log(`${index}: $effect.pre ${n}`);
	});

	$effect.pre(() => {
		console.log(`${index}: $effect.pre (2) ${n}`);
	});

	$effect(() => {
		console.log(`${index}: $effect ${n}`);
	});
</script>

<li>
	{logRender()}
</li>
