import { SVGProps } from 'react';

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
				fill="#BAB1AB"
			/>
			<path
				d="M53.257 28.111c0 2.701-.982 4.543-2.947 5.525-.574.287-2.374.678-5.404 1.166-1.963.329-2.945 1.088-2.945 2.271v4.973c0 .209.062.842.184 1.906l.185 1.965c0 .613-.144 1.617-.431 3.008-.776.163-1.678.348-2.7.555-.328-1.229-.491-2.069-.491-2.52 0-.203.05-.512.152-.921.102-.408.153-.716.153-.921 0-.284-.253-1.084-.762-2.393h-.953c-.125.203-.167.469-.127.795.164.696.225 1.289.186 1.781-.697.491-1.657 1.146-2.886 1.965-.288-.082-.39-.123-.308-.123v-4.359c-.082-.202-.286-.285-.614-.245h-.737l-.736 5.771c-.572.041-1.269.041-2.086 0-.287-1.35-.8-3.354-1.535-6.015h-.492c-.45 1.433-.695 2.21-.737 2.333 0 .163.052.48.155.951.101.471.152.787.152.951 0 .121-.041.43-.124.921l-.184 1.474c-.083.08-.184.121-.306.121-1.229 0-2.048-.306-2.455-.919-.411-.614-.575-1.476-.493-2.58l.493-7.366c0-.121.038-.285.121-.492.082-.203.123-.348.123-.428 0-.328-.348-.984-1.043-1.967-.123-.039-.758-.184-1.904-.43-.695-.163-2.067-.45-4.112-.858-2.824-.53-4.237-2.803-4.237-6.815 0-5.977 2.456-10.948 7.367-14.918.204 1.105.553 2.576 1.044 4.418l2.396.555c.247.081 1.494.533 3.745 1.352-1.146-.695-2.64-1.82-4.48-3.377-.697-.818-1.046-2.189-1.046-4.113 0-.45.778-.981 2.335-1.599 1.391-.571 2.434-.897 3.131-.979 2.209-.286 3.907-.432 5.096-.432 5.115 0 9.249 1.312 12.4 3.932-1.022 1.188-2.783 2.453-5.279 3.807.982.041 2.415-.348 4.299-1.168 1.882-.816 2.68-1.227 2.394-1.227.327 0 .982.654 1.965 1.963.735.982 1.329 1.865 1.78 2.641 1.31 2.333 2.19 4.852 2.642 7.553 0 .941.019 1.616.061 2.024v.489h-.005v-.001zm-23.516 1.108c0-1.761-.767-3.429-2.302-5.006-1.535-1.576-3.184-2.363-4.943-2.363-1.555 0-2.925.66-4.113 1.978-1.187 1.319-1.779 2.782-1.779 4.389 0 1.401.674 2.31 2.026 2.72.86.248 2.065.392 3.621.434h3.376c2.742.036 4.114-.682 4.114-2.152zm6.693 7.612v-1.901c-.286-.533-.573-1.087-.858-1.66-.246-.817-.697-1.963-1.352-3.439l-.676 7.186c0 .574-.121.859-.368.859-.163 0-.287-.04-.369-.122-.286-4.339-.429-6.224-.429-5.647v-2.148c-.083-.126-.185-.188-.308-.188-1.391 1.437-2.086 3.748-2.086 6.938 0 1.761.162 2.845.489 3.257.328-.083.695-.226 1.106-.431.163-.083.634-.123 1.412-.123.775 0 1.719.246 2.823.735.411-.001.616-1.105.616-3.316zm13.876-8.556c0-1.646-.614-3.118-1.843-4.418-1.229-1.297-2.64-1.945-4.234-1.945-1.72 0-3.328.787-4.82 2.363-1.495 1.574-2.242 3.223-2.242 4.942 0 1.433.697 2.148 2.088 2.148h7.06c2.66-.04 3.991-1.068 3.991-3.09zm39.209 39.343c0 .758-.293 1.437-.879 2.043-.586.604-1.258.905-2.016.905-1.207 0-2.098-.566-2.663-1.701l-2.667-.112c-.567 0-1.684.246-3.345.737-1.777.49-2.798.888-3.064 1.189-.414.454-.755 1.514-1.02 3.178-.228 1.36-.339 2.363-.339 3.006 0 1.02.16 1.768.48 2.24.321.473.984.869 1.984 1.189 1 .318 1.616.502 1.844.539.151 0 .396-.018.737-.057h.681c.491 0 1.001.076 1.532.227.755.227 1.077.527.965.907-.531-.074-1.456.038-2.778.34l1.586.795c0 .454-.643.679-1.928.679-.342 0-.806-.072-1.39-.225-.588-.154-.976-.229-1.163-.229h-.737c-.038.379-.15.943-.34 1.701-.646-.037-1.399-.416-2.27-1.133-.87-.72-1.418-1.079-1.643-1.079-.228 0-.551.359-.965 1.079-.417.717-.624 1.207-.624 1.475-.491-.268-.906-.758-1.249-1.475-.151-.494-.321-.986-.509-1.479-.379.039-1.077.836-2.099 2.385h-.284c-.077-.113-.36-.906-.852-2.385-1.172-.375-2.268-.563-3.288-.563-.491 0-1.249.112-2.27.341l-1.587-.113c.226-.228.888-.662 1.984-1.305 1.284-.758 2.269-1.137 2.949-1.137.112 0 .264.021.454.059.188.039.341.058.454.058.262 0 .689-.142 1.275-.427.586-.283.927-.539 1.019-.766.098-.229.145-.813.145-1.759 0-2.153-.568-3.763-1.703-4.819-.983-.945-2.608-1.625-4.877-2.043-.604 2.154-2.307 3.234-5.103 3.234-.909 0-1.816-.549-2.723-1.646-.907-1.098-1.361-2.099-1.361-3.007 0-1.399.586-2.551 1.758-3.459-.944-.981-1.418-1.983-1.418-3.006 0-.944.292-1.776.879-2.496.586-.716 1.353-1.133 2.297-1.248-.074-1.208.321-2.042 1.19-2.495-.415-.414-.622-1.15-.622-2.211 0-1.246.414-2.287 1.247-3.119.83-.83 1.871-1.248 3.117-1.248 1.363 0 2.479.475 3.348 1.418 1.098-3.742 3.459-5.613 7.089-5.613 1.889 0 3.554.756 4.99 2.27.53.565.793.868.793.905-.452 0-.225-.086.681-.254.909-.171 1.568-.257 1.986-.257 1.474 0 2.778.55 3.915 1.646.982.984 1.663 2.229 2.042 3.742.263.039.679.151 1.245.341.832.417 1.249 1.135 1.249 2.155 0 .188-.152.549-.454 1.079 2.419 1.361 3.63 3.251 3.63 5.67 0 .681-.266 1.627-.793 2.836.986.569 1.478 1.401 1.478 2.498zm-23.368 2.495v-.736c0-.869-.424-1.664-1.275-2.382-.851-.72-1.71-1.077-2.58-1.077-1.06 0-2.042.246-2.949.734 2.004-.11 4.271 1.041 6.804 3.461zm-1.02-7.03c-.566-.646-1.058-1.306-1.474-1.985-1.589.414-2.383.889-2.383 1.416.453-.037 1.116.047 1.984.256.87.209 1.496.313 1.873.313zm3.462-1.761v-2.495c-.909-.149-1.459-.226-1.646-.226v.851l1.646 1.87zm7.372-1.586c-.454-.189-1.305-.568-2.554-1.135v4.877c1.778-1.022 2.628-2.268 2.554-3.742zm3.116 6.692l-1.246-1.529c-.755.529-1.521 1.066-2.298 1.615-.775.547-1.445 1.162-2.011 1.844 1.699-.911 3.554-1.551 5.555-1.93z"
				fill="#0D0F0F"
			/>
		</g>
	</svg>
);

export default Icon;
