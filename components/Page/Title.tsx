import React from 'react';
import { Typography } from '@material-ui/core';

interface TitleProps {
	title: string;
	count: number;
	price: number;
}

const Title = ({ title, count, price }: TitleProps) => (
	<div>
		<Typography variant="h5">{title}</Typography>
		<Typography variant="button">
			<b>{count}</b> cards | total value: <b>${price}</b>
		</Typography>
	</div>
);

export default Title;
