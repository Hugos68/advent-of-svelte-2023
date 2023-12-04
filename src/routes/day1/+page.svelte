<script lang="ts">
	const { data } = $props();

	let category = $state('All');
	let search = $state('');

	let filteredChildren = $derived(
		data.children.filter(({ name, tally }) => {
			const isNaughty = tally < 0;
			const isGood = !isNaughty;
			const searchFilered = name.toLowerCase().includes(search.toLowerCase());
			switch (category) {
				case 'All':
					return searchFilered;
				case 'Good':
					return isGood && searchFilered;
				case 'Naughty':
					return isNaughty && searchFilered;
			}
		})
	);
</script>

<select bind:value={category}>
	<option>All</option>
	<option>Good</option>
	<option>Naughty</option>
</select>

<input bind:value={search} placeholder="Search..." />
<table>
	<tbody>
		<tr>
			<td>Name</td>
			<td>Tally</td>
		</tr>
		{#each filteredChildren as { name, tally }}
			<tr>
				<td>{name}</td>
				<td>{tally}</td>
			</tr>
		{/each}
	</tbody>
</table>
