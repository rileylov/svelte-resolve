<script lang="ts">
	import type { SliderProps } from './types.js';

	let {
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
		onValueChange,
	}: SliderProps = $props();

	let dragging = $state(false);
	let trackEl: HTMLDivElement;

	function getValueFromEvent(e: MouseEvent | TouchEvent) {
		const rect = trackEl.getBoundingClientRect();
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
		const raw = min + ratio * (max - min);
		const stepped = Math.round(raw / step) * step;
		return Math.max(min, Math.min(max, stepped));
	}

	function onpointerdown(e: PointerEvent) {
		if (disabled) return;
		e.preventDefault();
		dragging = true;
		value = getValueFromEvent(e);
		onValueChange?.(value);
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
	}

	function onpointermove(e: PointerEvent) {
		if (!dragging) return;
		e.preventDefault();
		value = getValueFromEvent(e);
		onValueChange?.(value);
	}

	function onpointerup(e: PointerEvent) {
		if (!dragging) return;
		dragging = false;
		(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
	}

	function ondragstart(e: DragEvent) {
		e.preventDefault();
	}

	let percent = $derived(((value - min) / (max - min)) * 100);
</script>

<div
	data-resolve-slider=""
	data-state={dragging ? 'dragging' : 'idle'}
	data-disabled={disabled || undefined}
	role="slider"
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max}
	tabindex={disabled ? -1 : 0}
	bind:this={trackEl}
	{onpointerdown}
	{onpointermove}
	{onpointerup}
	onlostpointercapture={() => dragging = false}
	{ondragstart}
>
	<div data-resolve-slider-track="">
		<div data-resolve-slider-knob="" style="left: {percent}%">
			<span data-resolve-slider-inner=""></span>
		</div>
	</div>
</div>

<style>
	[data-resolve-slider] {
		--track-height: 8px;
		--knob-size: 18px;
		--track-bg: #171717;
		--knob-color: #919191;
		--inner-color: #6b6b6b;

		position: relative;
		width: 100%;
		height: var(--knob-size);
		touch-action: none;
		user-select: none;
		display: flex;
		align-items: center;
	}

	[data-resolve-slider]:focus-visible {
		outline: none;
	}

	[data-resolve-slider]:focus-visible [data-resolve-slider-knob] {
		box-shadow: 0 0 0 2px rgba(146, 146, 146, 0.5);
	}

	[data-resolve-slider][data-disabled] {
		opacity: 0.4;
		cursor: not-allowed;
	}

	[data-resolve-slider-track] {
		position: relative;
		width: 100%;
		height: var(--track-height);
		background: var(--track-bg);
		border-radius: calc(var(--track-height) / 2);
	}

	[data-resolve-slider-knob] {
		position: absolute;
		top: 50%;
		width: var(--knob-size);
		height: var(--knob-size);
		border-radius: 50%;
		background: var(--knob-color);
		transform: translate(-50%, -50%);
		box-shadow: 0 0 0 3px #1f1f1f;
	}

	[data-resolve-slider-inner] {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: var(--inner-color);
		transform: translate(-50%, -50%);
	}

	[data-resolve-slider][data-state='dragging']:not([data-disabled]) [data-resolve-slider-inner] {
		width: 9px;
		height: 9px;
	}
</style>
