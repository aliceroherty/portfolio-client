export const login = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ apiKey: import.meta.env.VITE_API_KEY }),
	});

	return await response.json();
};

export const logout = async (refreshToken) => {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/auth/logout`,
		{
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: refreshToken }),
		}
	);

	return response.status == 204;
};

export const refresh = async (refreshToken) => {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/auth/refresh`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ token: refreshToken }),
		}
	);

	return await response.json();
};
