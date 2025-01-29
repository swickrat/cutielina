import React from "react";

interface IButton {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
}

export default function Button({ text, onClick, disabled }: IButton) {
	return (
		<button
			type="button"
			className="mt-4 rounded-xl bg-accent-primary px-4 py-2 text-xl text-color transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state"
			onClick={onClick}
			disabled={disabled}
		>
			<span>{text}</span>
		</button>
	);
}
