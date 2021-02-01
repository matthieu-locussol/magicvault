import { Card } from '@/types/Card';
import { CardIdentifier } from '@/utils/api';

export const copy = (content: string) => {
	const input = document.createElement('input');
	document.body.appendChild(input);
	input.value = content;
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
};

export const formatNumber = (number: number) => Math.round((number + Number.EPSILON) * 100) / 100;

export const computeCollectionValue = (cards: Card[], identifiers: CardIdentifier[]) => {
	const prices: Record<string, Card['prices']> = {};
	cards.forEach((card) => (prices[card.id] = card.prices));

	const total = {
		eur: 0,
		tix: 0,
		usd: 0,
	};

	identifiers.forEach((id) => {
		const localPrices = prices[id.id];

		total.eur += localPrices.eur ? parseFloat(localPrices.eur) * id.amount : 0;
		total.tix += localPrices.tix ? parseFloat(localPrices.tix) * id.amount : 0;
		total.usd += localPrices.usd ? parseFloat(localPrices.usd) * id.amount : 0;
	});

	total.eur = formatNumber(total.eur);
	total.tix = formatNumber(total.tix);
	total.usd = formatNumber(total.usd);

	return total;
};
