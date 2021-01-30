import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

const Needed = () => {
	const router = useRouter();
	const [session, loading] = useSession();

	if (loading) {
		return null;
	}

	if (!loading && !session) {
		router.push('/');
		return null;
	}

	return <p>SUCEPUTE. Work in progress.</p>;
};

export default Needed;
