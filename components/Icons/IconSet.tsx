import React from 'react';
import Image from 'next/image';
import { Tooltip, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useStore } from '@/store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			alignItems: 'center',
			position: 'relative',
			'& > *:not(:first-child)': {
				marginLeft: theme.spacing(0.5),
			},
		},
	}),
);

interface IconSetProps {
	code: string;
}

const IconSet = ({ code }: IconSetProps) => {
	const [store] = useStore();
	const classes = useStyles();

	const setObject = store.scryfall.sets.find((set) => set.code === code);
	const setImage = setObject?.icon_svg_uri || '';
	const setName = setObject?.name;

	return (
		<Tooltip arrow title={`${setName} (${code.toUpperCase()})`} placement="top">
			<div className={classes.root}>
				{setImage ? (
					<Image loading="eager" src={setImage} alt={setName} width={20} height={20} />
				) : (
					<CircularProgress size={7.8} />
				)}
			</div>
		</Tooltip>
	);
};

export default IconSet;
