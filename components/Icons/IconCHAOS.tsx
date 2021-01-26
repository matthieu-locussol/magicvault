import React, { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" {...props}>
		<path
			d="M76.142 0c-36.768 1.68 4.253 32.994-16.484 49.5l-.005.004-.007-.01-.293.129c-14.524 5.879-30.695-17.715-31.166 7.076 7.67-11.506 11.167-.273 23.775-.977-6.123 8.09-3.121 21.664-13.33 23.873-18.65 4.033-32.297-18.639-31.16-32.869 2.525-31.602 27.29-45.969 51.881-44.488-32.55-6.518-60.143 20.309-59.335 48.137.928 31.91 17.857 47.527 43.841 49.625 36.768-1.678-4.253-32.996 16.484-49.5l.005-.004.007.01.294-.129c14.523-5.879 30.696 17.715 31.165-7.076-7.669 11.506-11.167.273-23.775.977 6.123-8.09 3.123-21.664 13.331-23.871 18.651-4.033 32.296 18.637 31.159 32.867-2.523 31.604-27.289 45.969-51.88 44.488 32.55 6.518 60.143-20.309 59.334-48.139-.927-31.908-17.858-47.523-43.841-49.623z"
			fill="#000"
		/>
	</svg>
);

export default Icon;
