const authenticate = async (username?: string, password?: string) => {
	const url_backend = process.env.NEXT_PUBLIC_URL_BACKEND as string;
    const opciones = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: username, password: password}),
    }
    const fetchLogin = await fetch(`${url_backend}/api/auth/login`, opciones)
    const userLogin = await fetchLogin.json()
    if(userLogin.error) return null
	return userLogin
};

export const authService = {
	authenticate,
};
