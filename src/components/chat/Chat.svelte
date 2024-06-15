<script lang="ts">
	import { onMount } from 'svelte';
	import { customAlphabet } from 'nanoid';
	import Input from './elements/Input.svelte';
	import { getUserStore } from '../../stores/userStore';

	const { setUserId } = getUserStore();

	onMount(() => {
		let userId = localStorage.getItem('userId');

		if (!userId) {
			const nanoid = customAlphabet('1234567890', 10);
			const id = nanoid();

			localStorage.setItem('userId', id);
			userId = id;
		}

		setUserId(userId);
	});
</script>

<div class="content">
	<div></div>
	<Input />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		width: 276px;
		height: 365px;
		background: #fff;
		border-radius: 1.5rem;
		padding: 0.75rem;
		justify-content: space-between;
	}
</style>
