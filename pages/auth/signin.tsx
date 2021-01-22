import clsx from 'clsx';
import React from 'react';
import { Button } from '@material-ui/core';
import { YouTube as GoogleIcon, Facebook as FacebookIcon } from '@material-ui/icons';
import { red, blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { providers, signIn, SessionProvider } from 'next-auth/client';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			minWidth: '400px',
			marginLeft: 'auto',
			marginRight: 'auto',
			'&:not(:first-child)': {
				marginTop: theme.spacing(1),
			},
		},
		google: {
			color: theme.palette.getContrastText(red[400]),
			backgroundColor: red[400],
			'&:hover': {
				backgroundColor: red[600],
			},
		},
		facebook: {
			color: theme.palette.getContrastText(blue[600]),
			backgroundColor: blue[600],
			'&:hover': {
				backgroundColor: blue[800],
			},
		},
	}),
);

interface SignInProps {
	providers: SessionProvider[];
}

const SignIn = ({ providers }: SignInProps) => {
	const classes = useStyles();
	const buttonsIcons = [<GoogleIcon />, <FacebookIcon />];
	const buttonsClasses = [classes.google, classes.facebook];

	return (
		<Layout hideFooter>
			<Column type="full">
				<Card>
					{Object.values(providers).map((provider, idx) => (
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000' })}
							startIcon={buttonsIcons[idx]}
							className={clsx(classes.button, buttonsClasses[idx])}>
							Sign in with {provider.name}
						</Button>
					))}
				</Card>
			</Column>
		</Layout>
	);
};

SignIn.getInitialProps = async () => ({
	providers: await providers(),
});

export default SignIn;
