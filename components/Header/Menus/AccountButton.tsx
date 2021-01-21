import { IconButton, IconButtonProps } from '@material-ui/core';
import { AccountCircle as AccountIcon } from '@material-ui/icons';

const AccountButton = (props: IconButtonProps) => (
	<IconButton
		edge="end"
		aria-label="Access your account settings"
		aria-controls="account-menu"
		aria-haspopup="true"
		color="primary"
		{...props}>
		<AccountIcon />
	</IconButton>
);

export default AccountButton;
