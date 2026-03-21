<script lang="ts">
	import type { SwitchProps } from './types.js';

	let {
		checked = $bindable(false),
		disabled = false,
		onCheckedChange,
		...restProps
	}: SwitchProps = $props();

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onCheckedChange?.(checked);
	}
</script>

<button
	data-resolve-switch=""
	data-state={checked ? 'checked' : 'unchecked'}
	data-disabled={disabled || undefined}
	role="switch"
	aria-checked={checked}
	{disabled}
	onclick={toggle}
	{...restProps}
>
	<span data-resolve-switch-knob=""></span>
</button>

<style>
	[data-resolve-switch] {
		--track-width: 48px;
		--track-height: 26px;
		--knob-size: 16px;
		--knob-offset: 6px;
		--track-bg: #171717;
		--knob-off: #929292;
		--knob-on: #e64b3d;

		position: relative;
		display: inline-flex;
		align-items: center;
		width: var(--track-width);
		height: var(--track-height);
		padding: 0;
		border: none;
		border-radius: calc(var(--track-height) / 2);
		background: var(--track-bg);
		outline: none;
		-webkit-tap-highlight-color: transparent;
		transition: none;
		flex-shrink: 0;
	}

	[data-resolve-switch]:focus-visible {
		box-shadow: 0 0 0 2px rgba(230, 75, 61, 0.5);
	}

	[data-resolve-switch][data-disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	[data-resolve-switch-knob] {
		position: absolute;
		left: var(--knob-offset);
		width: var(--knob-size);
		height: var(--knob-size);
		border-radius: 50%;
		background: var(--knob-off);
		transition: none;
	}

	[data-resolve-switch][data-state='checked'] [data-resolve-switch-knob] {
		transform: translateX(calc(var(--track-width) - var(--knob-size) - var(--knob-offset) * 2));
		background: var(--knob-on);
	}

	[data-resolve-switch-knob]::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: #6b6b6b;
		transform: translate(-50%, -50%);
		transition: none;
	}

	[data-resolve-switch]:hover:not([data-disabled]) [data-resolve-switch-knob]::after {
		width: 8px;
		height: 8px;
	}

	[data-resolve-switch][data-state='checked']:hover:not([data-disabled]) [data-resolve-switch-knob]::after {
		background: #a4362c;
	}
</style>
