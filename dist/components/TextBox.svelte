<script lang="ts">
	import type { TextBoxProps } from './types.js';

	let {
		value = $bindable(''),
		placeholder = '',
		disabled = false,
		multiline = false,
		rows = 4,
		onValueChange,
		...restProps
	}: TextBoxProps = $props();
</script>

{#if multiline}
	<textarea
		data-resolve-textbox=""
		data-disabled={disabled || undefined}
		{placeholder}
		{disabled}
		{rows}
		bind:value
		oninput={() => onValueChange?.(value)}
		{...restProps}
	></textarea>
{:else}
	<input
		data-resolve-textbox=""
		data-disabled={disabled || undefined}
		type="text"
		{placeholder}
		{disabled}
		bind:value
		oninput={() => onValueChange?.(value)}
		{...restProps}
	/>
{/if}

<style>
	[data-resolve-textbox] {
		display: block;
		width: 100%;
		padding: 8px 12px;
		border: 2px solid #090909;
		border-radius: 6px;
		background: #1f1f1f;
		color: #8a8a8a;
		font-family: inherit;
		font-size: 1.2rem;
		outline: none;
		box-sizing: border-box;
		resize: vertical;
	}

	[data-resolve-textbox]::selection {
		background: #4b4b4b;
	}

	[data-resolve-textbox]::placeholder {
		color: #555555;
	}

	[data-resolve-textbox]:focus {
		border-color: #e64b3d;
		color: #ffffff;
	}

	[data-resolve-textbox][data-disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
