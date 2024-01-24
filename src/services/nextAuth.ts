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
			if (session.user) session.user.id = token.userId;
			return session;
		},
	},
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'username',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};

				return authService.authenticate(username, password); //(5)
			},
		}),
	],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
