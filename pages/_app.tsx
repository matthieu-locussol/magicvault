import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NProgress from 'nprogress';
import { Provider as AuthProvider } from 'next-auth/client';
import 'nprogress/nprogress.css';
import './main.css';

NProgress.configure({ showSpinner: false });

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

	const theme = createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				main: '#064d8c',
			},
			secondary: {
				main: '#d98c11',
				contrastText: '#ffffff',
			},
			background: {
				default: '#f4f8fc',
			},
			text: {
				primary: '#1f3356',
				secondary: '#6f7589',
			},
		},
		typography: {
			fontFamily: 'Poppins, Metamorphous',
		},
	});

	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		jssStyles?.parentElement?.removeChild(jssStyles);
	}, []);

	Router.events.on('routeChangeStart', () => NProgress.start());
	Router.events.on('routeChangeComplete', () => NProgress.done());
	Router.events.on('routeChangeError', () => NProgress.done());

	return (
		<AuthProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Head>
					<title>MagicVault ・ Organize your Magic collections!</title>
				</Head>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AuthProvider>
	);
}
