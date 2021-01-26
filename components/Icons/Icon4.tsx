import React, { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
		<g transform="translate(0 -1)" fill="none">
			<circle fill="#CAC5C0" cx="50" cy="50.998" r="50" />
			<path
				d="M64.27 68.359v6.723c0 7.684 2.695 11.525 8.094 11.525h2.33v4.394h-32.658v-4.394h2.607c5.303 0 7.961-3.798 7.961-11.392v-6.856h-32.795v-6.861l34.578-50.497h9.883v51.592h.82c3.383 0 5.852-2.608 7.408-7.816h4.115l-1.92 13.583-10.423-.001zm-11.666-5.766v-41.458l-27.893 41.458h27.893z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;
