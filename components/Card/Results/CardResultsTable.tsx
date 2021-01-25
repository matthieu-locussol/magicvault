import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ManaCost from '@/components/Card/ManaCost';
import { Card } from '@/types/Card';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
		row: {
			'&:nth-of-type(odd)': {
				backgroundColor: '#ffffff',
			},
			'&:nth-of-type(even)': {
				backgroundColor: '#f4f8fc',
			},
		},
		cell: {
			maxWidth: '160px',
			display: 'inline-block',
			fontSize: '13px',
			padding: '1px',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
		},
	}),
);

interface CardResultsTableProps {
	cards: Card[];
}

const CardResultsTable = ({ cards }: CardResultsTableProps) => {
	const classes = useStyles();

	const columns = {
		SET: (card: Card) => card.set.toUpperCase(),
		'N°': (card: Card) => card.collector_number,
		NAME: (card: Card) => card.name,
		COST: (card: Card) => <ManaCost value={card.mana_cost} />,
		TYPE: (card: Card) => card.type_line.split(' — ')[0].replace('Legendary', 'Lgd.'),
		R: (card: Card) => card.rarity.charAt(0).toUpperCase(),
		LA: (card: Card) => card.lang.toUpperCase(),
		ARTIST: (card: Card) => card.artist,
		USD: (card: Card) => (card.prices.usd ? `$${card.prices.usd}` : ''),
		EUR: (card: Card) => (card.prices.eur ? `€${card.prices.eur}` : ''),
		TIX: (card: Card) => card.prices.tix,
	};

	return (
		<TableContainer>
			<Table stickyHeader size="small" aria-label="sticky table">
				<TableHead>
					<TableRow>
						{Object.keys(columns).map((column) => (
							<TableCell key={column}>
								<b>{column}</b>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{cards.map((card: Card, idx: number) => (
						<TableRow hover className={classes.row} key={idx}>
							{Object.values(columns).map((getter, idc) => (
								<TableCell key={`${idx}-${idc}`}>
									<span className={classes.cell}>{getter(card)}</span>
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CardResultsTable;
