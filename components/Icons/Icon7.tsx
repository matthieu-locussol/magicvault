import React, { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
		<g transform="translate(0 -1)" fill="none">
			<circle fill="#CAC5C0" cx="50" cy="50.998" r="50" />
			<path
				d="M53.494 91h-11.643v-1.238c0-7.396 2.328-16.659 6.98-27.808 7.035-16.799 13.52-29.673 19.453-38.624l.822-1.232h-27.256c-3.93 0-6.92.819-8.975 2.463-2.059 1.645-3.582 4.387-4.586 8.222h-4.52l4.926-21.782h2.881c1.734.914 4.742 1.371 9.041 1.371h35.609v6.165c-1.275 1.829-2.918 4.75-4.926 8.768-3.838 7.485-7.352 16.208-10.553 26.163-4.743 14.702-7.163 27.209-7.253 37.532z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;
