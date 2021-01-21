import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './main.css';

NProgress.configure({ showSpinner: false });

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;

	const theme = createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				main: '#236348',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#3a4a51',
			},
			background: {
				default: '#ffffff',
			},
			text: {
				primary: '#173915',
				secondary: '#515b55',
			},
		},
		typography: {
			fontFamily: `Poppins, 'Yusei Magic'`,
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
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
