import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
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

const CardImage = (props: CardImageProps & ImageProps) => {
	const classes = useStyles();
	const [imageUri, setImageUri] = useState('');
	const [loading, setLoading] = useState(false);

	const CardImageSkeleton = () => (
		<Skeleton variant="rect" animation="wave" width={244} height={340} className={classes.root} />
	);

	useEffect(() => {
		if (props.data?.image_uris?.large) {
			setImageUri(props.data.image_uris.large);
		} else if (props.data?.card_faces.length > 0) {
			const face = props.data.card_faces[0];
			setImageUri(face.image_uris.large);
		}
	}, []);

	return !loading && imageUri ? (
		<Image
			{...props}
			layout="fixed"
			src={imageUri}
			alt=""
			width={244}
			height={340}
			className={classes.root}
			onLoadStart={() => setLoading(true)}
			onLoadedData={() => setLoading(false)}
		/>
	) : (
		<CardImageSkeleton />
	);
};

export default CardImage;
