<script lang="ts">
	import type { CheckboxProps } from './types.js';

	let {
		checked = $bindable(false),
		disabled = false,
		onCheckedChange,
		...restProps
	}: CheckboxProps = $props();

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onCheckedChange?.(checked);
	}
</script>

<button
	data-resolve-checkbox=""
	data-state={checked ? 'checked' : 'unchecked'}
	data-disabled={disabled || undefined}
	role="checkbox"
	aria-checked={checked}
	{disabled}
	onclick={toggle}
	{...restProps}
>
	{#if checked}
		<svg viewBox="650 90 660 710" fill="currentColor" stroke="none">
			<path d="M1097.3158,476.6399 C 1005.43823,609.0237, 924.3698,722.4955, 918.9653,727.8989 C 913.5607,736.004, 867.62195,700.8818, 818.98096,652.251 C 740.6148,576.60315, 729.80566,554.9895, 756.8284,511.76215 C 786.5535,465.83307, 789.2558,465.83307, 837.89685,509.06042 C 886.53784,552.2878, 894.6447,544.1826, 1051.3771,371.2732 C 1283.7731,111.90906, 1310.796,174.04846, 1097.3158,476.6399z" />
		</svg>
	{/if}
</button>

<style>
	[data-resolve-checkbox] {
		--size: 28px;
		--radius: 6px;
		--bg-off: #1f1f1f;
		--bg-on: #1f1f1f;
		--border-off: #070707;
		--border-on: #070707;
		--check-color: #ffffff;

		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--size);
		height: var(--size);
		padding: 0;
		border: 2px solid var(--border-off);
		border-radius: var(--radius);
		background: var(--bg-off);
		color: var(--check-color);
		outline: none;
		-webkit-tap-highlight-color: transparent;
		flex-shrink: 0;
	}

	[data-resolve-checkbox][data-state='checked'] {
		background: var(--bg-on);
		border-color: var(--border-on);
	}

	[data-resolve-checkbox]:focus-visible {
		box-shadow: 0 0 0 2px rgba(146, 146, 146, 0.5);
	}

	[data-resolve-checkbox][data-disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	svg {
		width: 22px;
		height: 22px;
	}
</style>
