import { TablePagination, LabelDisplayedRowsArgs } from '@material-ui/core';
import { usePaginateOwned } from '@/hooks/usePaginateOwned';

interface CardOwnedPaginationProps {
	page: number;
	count: number;
	loading: boolean;
}

const CardOwnedPagination = ({ page, count, loading }: CardOwnedPaginationProps) => {
	const paginateOwned = usePaginateOwned();

	const handleChangePage = (_: unknown, newPage: number) => paginateOwned(newPage);

	const label = ({ from, to, count }: LabelDisplayedRowsArgs) =>
		loading ? '' : `${from} - ${to} of ${count !== -1 ? `${count} cards` : `more than ${to}`}`;

	return (
		<TablePagination
			rowsPerPageOptions={[75]}
			component="div"
			count={count}
			rowsPerPage={75}
			page={page}
			onChangePage={handleChangePage}
			labelDisplayedRows={label}
		/>
	);
};

export default CardOwnedPagination;
