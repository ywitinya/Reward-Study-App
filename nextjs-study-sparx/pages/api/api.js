AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-6oox3ez50bgcup8r.us.auth0.com'
AUTH0_CLIENT_ID='Eq7WgMFLz44AAMJ20WQdxj51StIZ7mFr'
AUTH0_CLIENT_SECRET='H4atltowDZW6D22NbwXJ7qUMkBV6C201xj7JTudDcxpeXawN4uA-VoDKLvbd5frz'

import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}
