import React from 'react';
import { TablePagination, LabelDisplayedRowsArgs } from '@material-ui/core';
import { useSearchCards } from '@/hooks/useSearchCards';

interface CardResultsPaginationProps {
	page: number;
	count: number;
	query: string;
	loading: boolean;
}

const CARDS_PER_PAGE = 175;

const CardResultsPagination = ({ page, count, query, loading }: CardResultsPaginationProps) => {
	const searchCards = useSearchCards();

	const handleChangePage = (_: unknown, newPage: number) => searchCards(query, newPage);

	const label = ({ from, to, count }: LabelDisplayedRowsArgs) =>
		loading || query.length === 0 ? '' : `${from} - ${to} of ${count} cards`;

	return (
		<TablePagination
			rowsPerPageOptions={[CARDS_PER_PAGE]}
			component="div"
			count={count}
			rowsPerPage={CARDS_PER_PAGE}
			page={page}
			onChangePage={handleChangePage}
			labelDisplayedRows={label}
		/>
	);
};

export default CardResultsPagination;
