import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authService } from './auth';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account && account.type === 'credentials') {
				token.userId = account.providerAccountId;
			}
			return token;
		},
		async session({ session, token, user }) {
			session.user.id = token.userId;
			return session;
		},
	},
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Usuario',
					type: 'text',
					placeholder: 'username',
				},
				password: { label: 'Contraseña', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = await authService.authenticate(
					credentials?.username,
					credentials?.password
				);
				if (!user) {
					throw new Error('No se encontró el usuario');
				}
				return user;
			},
		}),
	],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
