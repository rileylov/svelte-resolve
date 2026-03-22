<script lang="ts">
	import type { ButtonProps } from './types.js';

	let {
		variant = 'default',
		disabled = false,
		tooltip,
		children,
		...restProps
	}: ButtonProps = $props();

	let showTooltip = $state(false);
	let hoverTimer: ReturnType<typeof setTimeout>;

	function onmouseenter() {
		hoverTimer = setTimeout(() => showTooltip = true, 500);
	}

	function onmouseleave() {
		clearTimeout(hoverTimer);
		showTooltip = false;
	}
</script>

<button
	data-resolve-button=""
	data-variant={variant}
	data-disabled={disabled || undefined}
	{disabled}
	{onmouseenter}
	{onmouseleave}
	onmousedown={() => { clearTimeout(hoverTimer); showTooltip = false; }}
	{...restProps}
>
	{@render children()}

	{#if tooltip && showTooltip}
		<div data-resolve-tooltip="" role="tooltip">{tooltip}</div>
	{/if}
</button>

<style>
	[data-resolve-button] {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 2px 56px;
		border: 1.5px solid #43474d;
		border-radius: 9999px;
		background: #28282e;
		color: #a9aaaa;
		font-family: inherit;
		font-size: 1.1rem;
		font-weight: 400;
		cursor: pointer;
		outline: none;
		-webkit-tap-highlight-color: transparent;
		white-space: nowrap;
	}

	[data-resolve-button]:hover:not([data-disabled]) {
		color: #fffcf8;
		border-color: #ababab;
	}

	[data-resolve-button]:active:not([data-disabled]) {
		background: #17181a;
		color: #ffffff;
		border-color: #ffffff;
	}

	[data-resolve-button]:focus-visible {
		box-shadow: 0 0 0 2px rgba(169, 170, 170, 0.3);
	}

	[data-resolve-button][data-disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	[data-resolve-button][data-variant='red'] {
		border-color: #e64b3d;
	}

	[data-resolve-button][data-variant='red']:hover:not([data-disabled]) {
		border-color: #ff6b5e;
	}

	[data-resolve-button][data-variant='red']:active:not([data-disabled]) {
		background: #17181a;
		color: #ffffff;
		border-color: #ff6b5e;
	}

	[data-resolve-tooltip] {
		position: absolute;
		top: calc(100% + 6px);
		left: calc(100% - 16px);
		background: rgba(0, 0, 0, 0.75);
		color: #ffffff;
		font-family: inherit;
		font-size: 0.85rem;
		padding: 6px 10px;
		white-space: nowrap;
		z-index: 200;
		pointer-events: none;
	}
</style>
