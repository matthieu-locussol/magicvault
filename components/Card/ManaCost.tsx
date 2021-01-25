import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as Icons from '@/components/Icons';
import { Card } from '@/types/Card';

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
		cost: {
			width: theme.spacing(2),
			borderRadius: theme.spacing(100),
			boxShadow: '-1px 1px 0 rgba(0, 0, 0, 0.85)',
		},
		separator: {
			fontSize: '9px',
			position: 'relative',
			top: '0.25em',
		},
	}),
);

type ManaCostType =
	| '{T}'
	| '{Q}'
	| '{E}'
	| '{PW}'
	| '{CHAOS}'
	| '{W}'
	| '{U}'
	| '{B}'
	| '{R}'
	| '{G}'
	| '{C}'
	| '{X}'
	| '{0}'
	| '{1}'
	| '{2}'
	| '{3}'
	| '{4}'
	| '{5}'
	| '{6}'
	| '{7}'
	| '{8}'
	| '{9}'
	| '{10}'
	| '{11}'
	| '{12}'
	| '{13}'
	| '{14}'
	| '{15}'
	| '{16}'
	| '{W/U}'
	| '{W/B}'
	| '{B/R}'
	| '{B/G}'
	| '{U/B}'
	| '{U/R}'
	| '{R/G}'
	| '{R/W}'
	| '{G/W}'
	| '{G/U}'
	| '{2/W}'
	| '{2/U}'
	| '{2/B}'
	| '{2/R}'
	| '{2/G}'
	| '{W/P}'
	| '{U/P}'
	| '{B/P}'
	| '{R/P}'
	| '{G/P}'
	| '{S}'
	| '//';

interface ManaCostProps {
	value: Card['mana_cost'];
}

const ManaCost = ({ value }: ManaCostProps) => {
	const classes = useStyles();

	const props = {
		className: classes.cost,
	};

	const mappings: Record<ManaCostType, JSX.Element> = {
		'{T}': <Icons.IconT {...props} />,
		'{Q}': <Icons.IconQ {...props} />,
		'{E}': <Icons.IconE {...props} />,
		'{PW}': <Icons.IconPW {...props} />,
		'{CHAOS}': <Icons.IconCHAOS {...props} />,
		'{W}': <Icons.IconW {...props} />,
		'{U}': <Icons.IconU {...props} />,
		'{B}': <Icons.IconB {...props} />,
		'{R}': <Icons.IconR {...props} />,
		'{G}': <Icons.IconG {...props} />,
		'{C}': <Icons.IconC {...props} />,
		'{X}': <Icons.IconX {...props} />,
		'{0}': <Icons.Icon0 {...props} />,
		'{1}': <Icons.Icon1 {...props} />,
		'{2}': <Icons.Icon2 {...props} />,
		'{3}': <Icons.Icon3 {...props} />,
		'{4}': <Icons.Icon4 {...props} />,
		'{5}': <Icons.Icon5 {...props} />,
		'{6}': <Icons.Icon6 {...props} />,
		'{7}': <Icons.Icon7 {...props} />,
		'{8}': <Icons.Icon8 {...props} />,
		'{9}': <Icons.Icon9 {...props} />,
		'{10}': <Icons.Icon10 {...props} />,
		'{11}': <Icons.Icon11 {...props} />,
		'{12}': <Icons.Icon12 {...props} />,
		'{13}': <Icons.Icon13 {...props} />,
		'{14}': <Icons.Icon14 {...props} />,
		'{15}': <Icons.Icon15 {...props} />,
		'{16}': <Icons.Icon16 {...props} />,
		'{W/U}': <Icons.IconWU {...props} />,
		'{W/B}': <Icons.IconWB {...props} />,
		'{B/R}': <Icons.IconBR {...props} />,
		'{B/G}': <Icons.IconBG {...props} />,
		'{U/B}': <Icons.IconUB {...props} />,
		'{U/R}': <Icons.IconUR {...props} />,
		'{R/G}': <Icons.IconRG {...props} />,
		'{R/W}': <Icons.IconRW {...props} />,
		'{G/W}': <Icons.IconGW {...props} />,
		'{G/U}': <Icons.IconGU {...props} />,
		'{2/W}': <Icons.Icon2W {...props} />,
		'{2/U}': <Icons.Icon2U {...props} />,
		'{2/B}': <Icons.Icon2B {...props} />,
		'{2/R}': <Icons.Icon2R {...props} />,
		'{2/G}': <Icons.Icon2W {...props} />,
		'{W/P}': <Icons.IconWP {...props} />,
		'{U/P}': <Icons.IconUP {...props} />,
		'{B/P}': <Icons.IconBP {...props} />,
		'{R/P}': <Icons.IconRP {...props} />,
		'{G/P}': <Icons.IconGP {...props} />,
		'{S}': <Icons.IconS {...props} />,
		'//': <span className={classes.separator}> // </span>,
	};

	return value ? (
		<Typography variant="body1" className={classes.root}>
			{(value.replaceAll('}', '} ').split(' ') as ManaCostType[]).map((fragment, key) => (
				<React.Fragment key={key}>{mappings[fragment]}</React.Fragment>
			))}
		</Typography>
	) : null;
};

export default ManaCost;
