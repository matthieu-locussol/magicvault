import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableCellProps,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';
import { Card } from '@/types/Card';
import { useSession } from 'next-auth/client';

const useStyles = makeStyles(() =>
	createStyles({
		row: {
			'&:nth-of-type(odd)': {
				backgroundColor: '#ffffff',
			},
			'&:nth-of-type(even)': {
				backgroundColor: '#f4f8fc',
			},
		},
		cell: {
			maxWidth: '140px',
			display: 'inline-block',
			fontSize: '13px',
			padding: '1px',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
		},
	}),
);

export interface CardColumn {
	name: string;
	align?: TableCellProps['align'];
	authenticated?: boolean;
	getter: (card: Card) => JSX.Element | number | string | null | undefined;
}

interface CardResultsTableProps {
	cards: Card[];
	columns: CardColumn[];
	caption: string;
}

const CardResultsTable = ({ cards, columns, caption }: CardResultsTableProps) => {
	const classes = useStyles();
	const [session] = useSession();

	const checkAuth = (needAuth: boolean | undefined, children: React.ReactNode) =>
		(needAuth && session) || !needAuth ? children : null;

	return (
		<TableContainer>
			<Table stickyHeader size="small" aria-label="sticky table">
				{caption && <caption>{caption}</caption>}
				<TableHead>
					<TableRow>
						{columns.map((column) =>
							checkAuth(
								column.authenticated,
								<TableCell key={column.name} align={column.align}>
									<b>{column.name}</b>
								</TableCell>,
							),
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{cards.map((card: Card, idx: number) => (
						<TableRow hover className={classes.row} key={idx}>
							{columns.map((column) =>
								checkAuth(
									column.authenticated,
									<TableCell key={`${column.name}-${idx}`} align={column.align}>
										<span className={classes.cell}>{column.getter(card)}</span>
									</TableCell>,
								),
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CardResultsTable;
