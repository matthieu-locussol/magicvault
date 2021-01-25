import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			borderRadius: '4.75% / 3.5%',
		},
	}),
);

interface CardImageProps {
	data: any;
}

const CardImage = ({ data }: CardImageProps) => {
	const classes = useStyles();
	const [imageUri, setImageUri] = useState('');

	const CardImageSkeleton = () => (
		<Skeleton variant="rect" animation="wave" width={244} height={340} className={classes.root} />
	);

	useEffect(() => {
		if (data?.image_uris?.large) {
			setImageUri(data.image_uris.large);
		} else if (data?.card_faces.length > 0) {
			const face = data.card_faces[0];
			setImageUri(face.image_uris.large);
		}
	}, []);

	return imageUri ? (
		<Image alt="" width={244} height={340} className={classes.root} src={imageUri} layout="fixed" />
	) : (
		<CardImageSkeleton />
	);
};

export default CardImage;