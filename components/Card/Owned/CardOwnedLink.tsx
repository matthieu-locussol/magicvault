import React, { useState } from 'react';
import { Button, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FileCopyRounded as CopyIcon } from '@material-ui/icons';
import Card from '@/components/Card';
import { copy } from '@/utils/utils';
import { setTimeout } from 'timers';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textfield: {
			borderColor: 'white !important',
		},
		button: {
			padding: `${theme.spacing(0.75)}px ${theme.spacing(1.25)}px`,
			minWidth: 0,
		},
	}),
);

interface CardOwnedLinkProps {
	collectionId: string;
}

const CardOwnedLink = ({ collectionId }: CardOwnedLinkProps) => {
	const classes = useStyles();
	const [copied, setCopied] = useState(false);

	const collectionUrl = `${process.env.NEXT_PUBLIC_URL}/collections/${collectionId}`;

	const copyUrl = () => {
		copy(collectionUrl);
		setCopied(true);
		setTimeout(() => setCopied(false), 1000);
	};

	return (
		<Card noPadding>
			<TextField
				disabled
				variant="outlined"
				value={collectionUrl}
				InputProps={{
					classes: { notchedOutline: classes.textfield },
					endAdornment: (
						<InputAdornment position="end">
							<Tooltip open={copied} arrow placement="top" title="Copied!">
								<Button
									disabled={copied}
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={copyUrl}>
									<CopyIcon fontSize="small" />
								</Button>
							</Tooltip>
						</InputAdornment>
					),
				}}
			/>
		</Card>
	);
};

export default CardOwnedLink;
