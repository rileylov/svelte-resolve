<script lang="ts">
	import type { DropdownProps } from './types.js';

	let {
		value = $bindable(''),
		options = [],
		disabled = false,
		onValueChange,
	}: DropdownProps = $props();

	let open = $state(false);
	let containerEl: HTMLDivElement;

	function toggle() {
		if (disabled) return;
		open = !open;
	}

	function select(option: string) {
		value = option;
		open = false;
		onValueChange?.(value);
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			open = false;
		} else if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle();
		}
	}

	function handleClickOutside(e: MouseEvent) {
		if (open && containerEl && !containerEl.contains(e.target as Node)) {
			open = false;
		}
	}
</script>

<svelte:document onclick={handleClickOutside} />

<div
	data-resolve-dropdown=""
	data-state={open ? 'open' : 'closed'}
	data-disabled={disabled || undefined}
	bind:this={containerEl}
>
	<button
		data-resolve-dropdown-trigger=""
		aria-expanded={open}
		aria-haspopup="listbox"
		{disabled}
		onclick={toggle}
		{onkeydown}
	>
		<span data-resolve-dropdown-text="">{value || 'Select...'}</span>
		<svg data-resolve-dropdown-chevron="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="6 9 12 15 18 9" />
		</svg>
	</button>

	{#if open}
		<div data-resolve-dropdown-menu="" role="listbox">
			{#each options as option}
				<button
					data-resolve-dropdown-option=""
					data-selected={option === value || undefined}
					role="option"
					aria-selected={option === value}
					onclick={() => select(option)}
				>
					{option}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	[data-resolve-dropdown] {
		position: relative;
		width: 100%;
	}

	[data-resolve-dropdown-trigger] {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 8px 12px;
		border: 1.5px solid #090909;
		border-radius: 6px;
		background: #1f1f1f;
		color: #8a8a8a;
		font-family: inherit;
		font-size: 1.1rem;
		cursor: pointer;
		outline: none;
		text-align: left;
		gap: 8px;
	}

	[data-resolve-dropdown-text] {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	[data-resolve-dropdown-chevron] {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: #8a8a8a;
	}

	[data-resolve-dropdown][data-state='open'] [data-resolve-dropdown-trigger] {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	[data-resolve-dropdown][data-disabled] [data-resolve-dropdown-trigger] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	[data-resolve-dropdown-menu] {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		max-height: 280px;
		overflow-y: auto;
		background: #28282e;
		border: 1.5px solid #090909;
		border-top: none;
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
		z-index: 100;
	}

	[data-resolve-dropdown-menu]::-webkit-scrollbar {
		width: 14px;
	}

	[data-resolve-dropdown-menu]::-webkit-scrollbar-track {
		background: transparent;
	}

	[data-resolve-dropdown-menu]::-webkit-scrollbar-thumb {
		background: #5a5f66;
		border: 2px solid #090909;
		border-radius: 7px;
	}

	[data-resolve-dropdown-menu]::-webkit-scrollbar-thumb:hover {
		background: #5a5f66;
	}

	[data-resolve-dropdown-menu]::-webkit-scrollbar-thumb:active {
		background: #5a5f66;
	}

	[data-resolve-dropdown-option] {
		display: block;
		width: 100%;
		padding: 8px 12px;
		border: none;
		background: none;
		color: #8a8a8a;
		font-family: inherit;
		font-size: 0.95rem;
		text-align: left;
		cursor: pointer;
		outline: none;
	}

	[data-resolve-dropdown-option]:hover {
		background: #1f1f1f;
		color: #ffffff;
	}

	[data-resolve-dropdown-option][data-selected] {
		background: #1f1f1f;
		color: #ffffff;
	}
</style>
