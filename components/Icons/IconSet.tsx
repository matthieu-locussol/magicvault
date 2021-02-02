import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip, CircularProgress, ClickAwayListener, useMediaQuery } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
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
			'&:hover': {
				cursor: 'pointer',
				opacity: 0.7,
			},
		},
	}),
);

interface IconSetProps {
	code: string;
}

const IconSet = ({ code }: IconSetProps) => {
	const theme = useTheme();
	const classes = useStyles();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [store] = useStore();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const setObject = store.scryfall.sets.find((set) => set.code === code);
	const setImage = setObject?.icon_svg_uri || '';
	const setName = setObject?.name;

	return (
		<ClickAwayListener onClickAway={handleClose}>
			<Tooltip
				open={open}
				onOpen={handleOpen}
				onClose={handleClose}
				disableFocusListener={isMobile}
				disableHoverListener={isMobile}
				disableTouchListener={isMobile}
				arrow
				title={`${setName} (${code.toUpperCase()})`}
				placement="top">
				<div className={classes.root}>
					{setImage ? (
						<Image
							onClick={handleOpen}
							loading="eager"
							src={setImage}
							alt={setName}
							width={20}
							height={20}
						/>
					) : (
						<CircularProgress size={7.8} />
					)}
				</div>
			</Tooltip>
		</ClickAwayListener>
	);
};

export default IconSet;
