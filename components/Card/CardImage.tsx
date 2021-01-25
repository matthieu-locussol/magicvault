import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Card } from '@/types/Card';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			borderRadius: '4.75% / 3.5%',
		},
	}),
);

interface CardImageProps {
	card: Card;
}

const CardImage = ({ card }: CardImageProps) => {
	const classes = useStyles();
	const [imageUri, setImageUri] = useState('');

	useEffect(() => {
		if (card?.image_uris?.large) {
			setImageUri(card.image_uris.normal);
		} else if (card?.card_faces && card?.card_faces?.length > 0) {
			const face = card.card_faces[0];
			setImageUri(face?.image_uris?.normal || '');
		}
	}, []);

	return imageUri ? (
		<Image
			loading="eager"
			alt=""
			width={244}
			height={340}
			className={classes.root}
			src={imageUri}
			layout="fixed"
		/>
	) : null;
};

export default CardImage;
