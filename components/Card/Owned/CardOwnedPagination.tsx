import React from 'react';
import { TablePagination, LabelDisplayedRowsArgs } from '@material-ui/core';
import { usePaginateOwned } from '@/hooks/usePaginateOwned';

interface CardOwnedPaginationProps {
	page: number;
	count: number;
	loading: boolean;
	onChangePage?: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
}

const CardOwnedPagination = ({ page, count, loading, onChangePage }: CardOwnedPaginationProps) => {
	const paginateOwned = usePaginateOwned();

	const handleChangePage = onChangePage
		? onChangePage
		: (_: unknown, newPage: number) => paginateOwned(newPage);

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
