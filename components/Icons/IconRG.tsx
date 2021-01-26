import React, { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
		<g fill="none">
			<path
				d="M85.349 14.637c9.053 9.051 14.651 21.551 14.651 35.36 0 27.616-22.387 50.003-50 50.003-13.807 0-26.305-5.596-35.354-14.646"
				id="Shape"
				fill="#A3C095"
			/>
			<path
				d="M14.646 85.354c-9.05-9.047-14.646-21.549-14.646-35.356 0-27.613 22.387-49.997 50-49.997 13.802 0 26.301 5.594 35.349 14.637"
				id="Shape"
				fill="#E49977"
			/>
			<path
				d="M51.937 38.077c-1.718 4.099-5.13 6.146-10.24 6.146-.937 0-1.952.115-3.044.35-1.639.353-2.457.841-2.457 1.465 0 .195.136.418.409.674.272.253.508.38.703.38-.977 0-.313.03 1.987.086 2.302.06 3.746.089 4.332.089-3.395 1.988-9.07 2.906-17.029 2.75-2.614-.037-4.857-1.188-6.729-3.451-1.834-2.146-2.75-4.545-2.75-7.196 0-2.81.945-5.199 2.839-7.171 1.89-1.967 4.242-2.953 7.051-2.953.623 0 1.453.137 2.486.408 1.034.273 1.727.41 2.077.41 1.444 0 3.238-.597 5.384-1.785 2.146-1.19 3.161-1.785 3.044-1.785-.391 4.096-1.756 6.848-4.097 8.251-1.679.978-2.516 1.933-2.516 2.866 0 .586.349 1.055 1.052 1.406.546.271 1.151.408 1.815.408 1.014 0 2.008-.623 2.984-1.871.974-1.248 1.403-2.38 1.286-3.396-.115-1.171-.037-2.576.235-4.212.077-.471.361-1.045.848-1.727.488-.684.928-1.104 1.317-1.261 0 .353-.128.938-.381 1.755-.254.819-.38 1.428-.38 1.814 0 .859.233 1.522.702 1.99.702-.271 1.325-1.15 1.872-2.634.468-1.131.74-2.224.82-3.276-1.64-.075-3.211-.818-4.712-2.225-1.502-1.404-2.252-2.926-2.252-4.563 0-.272.037-.547.117-.819.232.353.583.899 1.054 1.64.661.973 1.17 1.461 1.521 1.461.468 0 .701-.488.701-1.461 0-1.248-.331-2.379-.994-3.395-.742-1.211-1.698-1.814-2.867-1.814-.548 0-1.366.293-2.458.879-1.093.584-2.088.877-2.982.877-.274 0-1.484-.354-3.63-1.055 3.783-.624 5.676-1.189 5.676-1.697 0-1.326-2.594-2.224-7.783-2.69-.507-.038-1.442-.116-2.808-.235.155-.193 1.268-.408 3.336-.644 1.755-.192 2.983-.294 3.685-.294 9.285 0 15.175 4.508 17.673 13.521.431-.357.646-.949.646-1.779 0-1.069-.313-2.414-.937-4.035-.235-.633-.607-1.584-1.113-2.848 3.197 4.075 4.8 7.938 4.8 11.584 0 1.92-.451 3.666-1.348 5.23-.583 1.061-1.678 2.412-3.276 4.059-1.599 1.646-2.691 2.92-3.277 3.822 2.146-.586 3.552-1.036 4.215-1.348 1.48-.663 2.827-1.659 4.036-2.984-.001.511-.216 1.27-.643 2.283zm-25.515-22.997c0 .702-.391 1.15-1.17 1.348l-1.521.233c-.548.271-1.347 1.346-2.398 3.218-.118-.584-.293-1.404-.528-2.458-.351.039-.936.353-1.755.937-.351.272-.917.684-1.698 1.229.235-1.404 1.017-2.826 2.342-4.271 1.404-1.599 2.771-2.396 4.096-2.396 1.755-.003 2.632.719 2.632 2.16zm10.182 5.385c0 .661-.36 1.221-1.083 1.668-.722.448-1.434.674-2.135.674-.938 0-1.777-.525-2.517-1.582-.898-1.285-1.814-2.125-2.751-2.516.193-.195.429-.293.704-.293.35 0 .944.271 1.783.818.837.549 1.374.82 1.609.82.195 0 .517-.271.965-.82.448-.547.945-.818 1.493-.818 1.289 0 1.932.684 1.932 2.049zm52.915 47.153c0 .758-.293 1.437-.879 2.043-.586.604-1.258.905-2.016.905-1.207 0-2.098-.566-2.663-1.701l-2.667-.112c-.567 0-1.684.246-3.345.737-1.777.49-2.798.888-3.063 1.189-.414.454-.755 1.514-1.021 3.178-.228 1.36-.339 2.363-.339 3.006 0 1.02.16 1.768.48 2.24.321.473.984.869 1.984 1.189 1 .318 1.616.502 1.844.539.151 0 .396-.018.737-.057h.681c.491 0 1.001.076 1.532.227.755.227 1.077.527.965.907-.531-.074-1.456.038-2.778.34l1.586.795c0 .454-.643.679-1.928.679-.342 0-.806-.072-1.39-.225-.588-.154-.976-.229-1.163-.229h-.737c-.038.379-.15.943-.34 1.701-.646-.037-1.399-.416-2.27-1.133-.87-.72-1.418-1.079-1.643-1.079-.228 0-.551.359-.965 1.079-.417.717-.624 1.207-.624 1.475-.491-.268-.906-.758-1.249-1.475-.151-.494-.321-.986-.509-1.479-.379.039-1.077.836-2.099 2.385h-.284c-.077-.113-.36-.906-.852-2.385-1.172-.375-2.268-.563-3.288-.563-.491 0-1.249.112-2.27.341l-1.587-.113c.226-.228.888-.662 1.984-1.305 1.284-.758 2.269-1.137 2.949-1.137.112 0 .264.021.454.059.188.039.341.058.454.058.262 0 .689-.142 1.275-.427.586-.283.927-.539 1.019-.766.098-.229.145-.813.145-1.759 0-2.153-.568-3.763-1.703-4.819-.983-.945-2.608-1.625-4.877-2.043-.604 2.154-2.307 3.234-5.103 3.234-.909 0-1.816-.549-2.723-1.646-.907-1.097-1.361-2.099-1.361-3.007 0-1.399.586-2.551 1.758-3.459-.944-.981-1.418-1.983-1.418-3.006 0-.944.292-1.776.879-2.496.586-.716 1.353-1.133 2.297-1.248-.074-1.208.321-2.042 1.19-2.495-.415-.414-.622-1.15-.622-2.211 0-1.246.414-2.287 1.247-3.119.83-.83 1.871-1.248 3.117-1.248 1.363 0 2.479.475 3.348 1.418 1.098-3.742 3.459-5.613 7.089-5.613 1.889 0 3.554.756 4.99 2.27.53.565.793.868.793.905-.452 0-.225-.086.681-.254.909-.171 1.568-.257 1.986-.257 1.474 0 2.778.55 3.915 1.646.982.984 1.663 2.229 2.042 3.742.263.039.679.151 1.245.341.832.417 1.249 1.135 1.249 2.155 0 .188-.152.549-.454 1.079 2.419 1.361 3.63 3.251 3.63 5.67 0 .681-.266 1.627-.793 2.836.986.569 1.478 1.401 1.478 2.498zm-23.368 2.495v-.736c0-.869-.424-1.664-1.275-2.382-.851-.72-1.71-1.077-2.58-1.077-1.06 0-2.042.246-2.949.734 2.004-.11 4.271 1.041 6.804 3.461zm-1.02-7.03c-.566-.646-1.058-1.306-1.474-1.985-1.589.414-2.383.889-2.383 1.416.453-.037 1.116.047 1.984.256.87.209 1.496.313 1.873.313zm3.462-1.761v-2.495c-.909-.149-1.459-.226-1.646-.226v.851l1.646 1.87zm7.372-1.586c-.454-.189-1.305-.568-2.554-1.135v4.877c1.778-1.022 2.628-2.268 2.554-3.742zm3.116 6.692l-1.246-1.529c-.755.529-1.521 1.066-2.298 1.615-.775.547-1.445 1.162-2.011 1.844 1.699-.911 3.554-1.551 5.555-1.93z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;
