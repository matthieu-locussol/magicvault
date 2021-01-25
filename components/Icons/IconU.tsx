import { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
		<g fill="none">
			<circle fill="#C1D7E9" cx="50" cy="50" r="50" />
			<path
				d="M67.488 83.719c-4.787 4.871-10.684 7.307-17.688 7.307-7.861 0-14.098-2.69-18.711-8.073-4.359-5.127-6.537-11.662-6.537-19.606 0-8.543 3.717-18.286 11.15-29.224 6.064-8.969 13.199-16.83 21.402-23.58-1.197 5.469-1.793 9.355-1.793 11.662 0 5.299 1.664 10.467 4.996 15.508 4.102 5.98 7.219 10.426 9.357 13.328 3.332 5.043 4.998 9.955 4.998 14.737.002 7.093-2.391 13.074-7.174 17.941zm-.129-27.362c-1.281-2.861-2.777-4.762-4.486-5.703.256.514.385 1.24.385 2.18 0 1.795-.512 4.357-1.539 7.689l-1.664 5.127c0 2.99 1.492 4.486 4.484 4.486 3.16 0 4.742-2.095 4.742-6.281 0-2.134-.64-4.632-1.922-7.498z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;