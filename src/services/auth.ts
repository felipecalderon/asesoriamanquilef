const authenticate = (username: string, password: string) => {
	if (username !== 'admin' && password !== 'admin') return null; 

	const user = {
		id: '9001',
		name: 'Web Admin',
		email: 'admin@example.com',
	};

	return user; 
};

export const authService = {
	authenticate,
};
