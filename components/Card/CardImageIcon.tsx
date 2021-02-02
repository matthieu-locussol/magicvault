import React, { useState } from 'react';
import { Tooltip, CircularProgress, useMediaQuery, ClickAwayListener } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { CameraAltRounded as PictureIcon } from '@material-ui/icons';
import { Card } from '@/types/Card';
import CardImage from '@/components/Card/CardImage';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		tooltip: {
			width: 246,
			height: 342,
			padding: theme.spacing(0.125),
			borderRadius: '4.75% / 3.5%',
		},
		content: {
			position: 'relative',
		},
		loader: {
			position: 'absolute',
			top: 'calc(50% - 10px)',
			right: 'calc(50% - 10px)',
			zIndex: -1,
		},
		icon: {
			marginBottom: theme.spacing(-1.25),
			'&:hover': {
				cursor: 'pointer',
				color: theme.palette.primary.light,
			},
		},
	}),
);

interface CardImageIconProps {
	card: Card;
}

const CardImageIcon = ({ card }: CardImageIconProps) => {
	const theme = useTheme();
	const classes = useStyles();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ClickAwayListener onClickAway={handleClose}>
			<Tooltip
				open={open}
				onOpen={handleOpen}
				onClose={handleClose}
				disableFocusListener={isMobile}
				disableHoverListener={isMobile}
				disableTouchListener={isMobile}
				classes={{ tooltip: classes.tooltip }}
				title={
					<div className={classes.content}>
						<CardImage card={card} />
						<CircularProgress size={20} color="inherit" className={classes.loader} />
					</div>
				}>
				<PictureIcon onClick={handleOpen} className={classes.icon} />
			</Tooltip>
		</ClickAwayListener>
	);
};

export default CardImageIcon;
