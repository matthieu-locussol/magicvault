module.exports = {
	images: {
		domains: ['c1.scryfall.com', 'c2.scryfall.com'],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/search',
				permanent: true,
			},
		];
	},
};
