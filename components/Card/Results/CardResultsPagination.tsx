import { TablePagination, LabelDisplayedRowsArgs } from '@material-ui/core';
import { useSearchCards } from '@/hooks/useSearchCards';

interface CardResultsPaginationProps {
	page: number;
	count: number;
	query: string;
	loading: boolean;
}

const CardResultsPagination = ({ page, count, query, loading }: CardResultsPaginationProps) => {
	const searchCards = useSearchCards();

	const handleChangePage = (_: unknown, newPage: number) => searchCards(query, newPage);

	const label = ({ from, to, count }: LabelDisplayedRowsArgs) =>
		loading || query.length === 0
			? ''
			: `${from} - ${to} of ${count !== -1 ? `${count} cards` : `more than ${to}`}`;

	return (
		<TablePagination
			rowsPerPageOptions={[175]}
			component="div"
			count={count}
			rowsPerPage={175}
			page={page}
			onChangePage={handleChangePage}
			labelDisplayedRows={label}
		/>
	);
};

export default CardResultsPagination;
