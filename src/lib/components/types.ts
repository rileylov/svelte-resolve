import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

export type SwitchProps = Omit<HTMLButtonAttributes, 'children'> & {
	checked?: boolean;
	disabled?: boolean;
	onCheckedChange?: (checked: boolean) => void;
};

export type SliderProps = {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	onValueChange?: (value: number) => void;
};

export type CheckboxProps = Omit<HTMLButtonAttributes, 'children'> & {
	checked?: boolean;
	disabled?: boolean;
	onCheckedChange?: (checked: boolean) => void;
};

export type ButtonProps = Omit<HTMLButtonAttributes, 'children'> & {
	variant?: 'default' | 'red';
	disabled?: boolean;
	children: Snippet;
};

export type TextBoxProps = {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	multiline?: boolean;
	rows?: number;
	onValueChange?: (value: string) => void;
} & Omit<HTMLInputAttributes, 'value'> & Omit<HTMLTextareaAttributes, 'value'>;

export type DropdownProps = {
	value?: string;
	options?: string[];
	disabled?: boolean;
	onValueChange?: (value: string) => void;
};
