import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(process.env.API_KEY, process.env.AUTH_DOMAIN, {
  auth: {
    params: {
      scope: 'openid profile email',
    },
    token: 'token id_token',
    redirect: false,
    audience: 'https://api.tekkenhub.com',
  },
  languageDictionary: {
    title: 'TekkenHub',
  },
  autoclose: true,
});

const setSession = authResult => {
  // Set the time that the Access Token will expire at
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime(),
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('expires_at', expiresAt);
};

export const onAuthenticated = callback =>
  lock.on('authenticated', authResult => {
    console.log(authResult);
    setSession(authResult);
    lock.getUserInfo(authResult.accessToken, (error, profile) => {
      if (error) {
        // Handle error
        console.log(error);
        return;
      }

      // TODO: set in reducer
      console.log('profile', profile);
      callback(profile);
    });
  });

export const login = () =>
  lock.show({
    allowedConnections: ['twitter', 'facebook', 'github', 'google-oauth2'],
    allowSignUp: false,
  });

export const logout = () => {
  // Clear Access Token and ID Token from local storage
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_at');
};

export const isAuthenticated = () => {
  // Check whether the current time is past the
  // Access Token's expiry time
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
};
