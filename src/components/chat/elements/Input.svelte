<script lang="ts">
	import IcMSend from '../../../Icons/IcMSend.svg';

	let message = '';
	let disabled = true;

	const sendMessage = () => {
		message = '';
	};

	const onEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') sendMessage();
	};

	$: if (message.trim().length >= 1) {
		disabled = false;
	} else {
		disabled = true;
	}
</script>

<div class="content">
	<button class:btn-disabled={disabled} class="btn" style="background: url({IcMSend});" />
	<input
		on:keydown={onEnter}
		bind:value={message}
		class="input"
		placeholder="Введите сообщение"
		type="text"
	/>
</div>

<style>
	.content {
		position: relative;
	}

	.btn {
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		right: 0;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.btn-disabled {
		opacity: 0.4;
	}

	.input {
		width: 100%;
		padding: 0.875rem 1rem;
		background: #f5f8fa;
		border-radius: 3.75rem;
		font-size: 0.875rem;
	}
</style>
