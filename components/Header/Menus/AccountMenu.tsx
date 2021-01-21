import { Menu, MenuItem } from '@material-ui/core';

interface AccountMenuProps {
	anchor: HTMLElement | null;
	onClose: () => void;
}

const AccountMenu = ({ anchor, onClose }: AccountMenuProps) => {
	const isMenuOpen = Boolean(anchor);

	return (
		<Menu
			anchorEl={anchor}
			getContentAnchorEl={null}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			id="account-menu"
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={onClose}>
			<MenuItem onClick={onClose}>Profile</MenuItem>
			<MenuItem onClick={onClose}>My account</MenuItem>
		</Menu>
	);
};

export default AccountMenu;
