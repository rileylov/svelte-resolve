<script lang="ts">
	import { Switch, Slider, Checkbox, Button, TextBox, Dropdown } from '$lib';

	let switchOn = $state(false);
	let switchOn2 = $state(true);
	let sliderVal = $state(0);
	let sliderVal2 = $state(50);
	let checkOn = $state(true);
	let checkOff = $state(false);
	let textVal = $state('');
	let fontVal = $state('Adwaita Mono');
	const fonts = ['Adwaita Mono', 'Adwaita Sans', 'Andale Mono', 'Arial', 'Arial Black', 'Bitstream Vera Sans', 'Bitstream Vera Sans Mono', 'Bitstream Vera Serif', 'C059', 'Cantarell', 'Caveat', 'Comic Sans MS', 'Courier New', 'D050000L', 'DejaVu Math TeX Gyre', 'DejaVu Sans', 'DejaVu Sans Mono', 'DejaVu Serif', 'Droid Sans', 'FreeMono', 'FreeSans', 'FreeSerif', 'Georgia', 'Impact', 'Liberation Mono', 'Liberation Sans'];
</script>

<div class="demo">
	<h1>Components Testing (need to fix scaling)</h1>
	

	<section>
		<h2>Switch</h2>
		<p class="description">On/off toggle switch. Grey when off, red when on.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Off</span>
				<Switch bind:checked={switchOn} />
				<span class="state">{switchOn ? 'On' : 'Off'}</span>
			</div>

			<div class="variant">
				<span class="label">On</span>
				<Switch bind:checked={switchOn2} />
				<span class="state">{switchOn2 ? 'On' : 'Off'}</span>
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<Switch checked={false} disabled />
			</div>
		</div>
	</section>

	<section>
		<h2>Slider</h2>
		<p class="description">Draggable range slider. Inner circle appears on hover and drag.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Default</span>
				<Slider bind:value={sliderVal} />
				<span class="state">{sliderVal}</span>
			</div>

			<div class="variant">
				<span class="label">Midpoint</span>
				<Slider bind:value={sliderVal2} />
				<span class="state">{sliderVal2}</span>
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<Slider value={30} disabled />
			</div>
		</div>
	</section>

	<section>
		<h2>Checkbox</h2>
		<p class="description">Rounded square checkbox with checkmark icon.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Checked</span>
				<Checkbox bind:checked={checkOn} />
				<span class="state">{checkOn ? 'On' : 'Off'}</span>
			</div>

			<div class="variant">
				<span class="label">Unchecked</span>
				<Checkbox bind:checked={checkOff} />
				<span class="state">{checkOff ? 'On' : 'Off'}</span>
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<Checkbox checked={false} disabled />
			</div>
		</div>
	</section>

	<section>
		<h2>Button</h2>
		<p class="description">Pill-shaped button with outline.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Default</span>
				<Button>Analyze</Button>
			</div>

			<div class="variant">
				<span class="label">Red</span>
				<Button variant="red">Analyze</Button>
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<Button disabled>Analyze</Button>
			</div>
		</div>
	</section>

	<section>
		<h2>TextBox</h2>
		<p class="description">Text input field.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Default</span>
				<TextBox bind:value={textVal} placeholder="Type something..." />
			</div>

			<div class="variant">
				<span class="label">Multiline</span>
				<TextBox multiline placeholder="Write a paragraph..." />
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<TextBox value="Read only" disabled />
			</div>
		</div>
	</section>

	<section>
		<h2>Dropdown</h2>
		<p class="description">Selectable dropdown menu with scrollable options list.</p>

		<div class="variants">
			<div class="variant">
				<span class="label">Default</span>
				<Dropdown bind:value={fontVal} options={fonts} />
			</div>

			<div class="variant">
				<span class="label">Disabled</span>
				<Dropdown value="Arial" options={fonts} disabled />
			</div>
		</div>
	</section>
</div>

<style>
	.demo {
		max-width: 720px;
		margin: 0 auto;
		padding: 48px 24px;
		font-family: inherit;
	}

	h1 {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 40px;
		border-bottom: 1px solid #3a3a3a;
		padding-bottom: 16px;
	}

	section {
		margin-bottom: 48px;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: 4px;
	}

	.description {
		color: #929292;
		font-size: 0.875rem;
		margin-bottom: 20px;
	}

	.variants {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.variant {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		background: #212126;
		border-radius: 8px;
	}

	.label {
		width: 80px;
		font-size: 0.875rem;
		color: #aaa;
	}

	.state {
		font-size: 0.8rem;
		color: #666;
		margin-left: auto;
	}
</style>
