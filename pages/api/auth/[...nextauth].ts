import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { InitOptions } from 'next-auth';
import Providers from 'next-auth/providers';

const options: InitOptions = {
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID || '',
			clientSecret: process.env.GOOGLE_SECRET || '',
		}),
		Providers.Facebook({
			clientId: process.env.FACEBOOK_ID || '',
			clientSecret: process.env.FACEBOOK_SECRET || '',
		}),
	],
	secret: process.env.SECRET,
	pages: {
		signIn: '/auth/signin',
		signOut: '/auth/signout',
	},
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
