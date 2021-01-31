export const copy = (content: string) => {
	const input = document.createElement('input');
	document.body.appendChild(input);
	input.value = content;
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
};
