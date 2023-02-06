import KeycloakProvider from 'next-auth/providers/keycloak'
import { NuxtAuthHandler } from '#auth'

let keycloakUrl = process.env.AUTH_URL?.replace(/\/+$/, '');

export default NuxtAuthHandler({
  debug: true,
  secret: process.env.AUTH_SECRET,

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    KeycloakProvider.default({
      clientId: process.env.AUTH_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH_SECRET,
      idToken: true,
      issuer: `${keycloakUrl}/realms/${process.env.AUTH_REALM}`,
      wellKnown: `${keycloakUrl}/realms/${process.env.AUTH_REALM}/.well-known/openid-configuration`,
      authorization: `${keycloakUrl}/realms/${process.env.AUTH_REALM}/protocol/openid-connect/auth`, 
    }),
  ],
  callbacks: {
    session: (data : any) => {         
        return data.session
    },
},
})
