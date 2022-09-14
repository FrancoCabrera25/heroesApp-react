import React from 'react';
import { AuthProvider } from '../src/auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';
export const HeroesApp = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};
