import { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
		<g transform="translate(0 -1)" fill="none">
			<circle fill="#CAC5C0" cx="50" cy="50.998" r="50" />
			<path
				d="M34.957 12.352h28.941c3.754 0 5.988-.45 6.703-1.352h4.156l-2.422 10.925h-35.314l-3.408 15.789c5.127-2.07 9.668-3.104 13.625-3.104 7.729 0 14.25 2.587 19.559 7.758 5.305 5.171 7.961 11.622 7.961 19.357 0 8.996-3.465 16.237-10.394 21.722-6.385 5.039-14.162 7.553-23.338 7.553-5.395 0-10.66-.808-15.785-2.426l1.617-4.046c4.32 1.169 8.141 1.751 11.469 1.751 6.654 0 12.477-2.18 17.473-6.544 4.99-4.358 7.488-9.826 7.488-16.392 0-5.665-1.844-10.32-5.533-13.959-3.689-3.646-8.365-5.468-14.033-5.468-5.213 0-10.07 1.8-14.568 5.396l-2.701-.538 8.504-36.422z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;
