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

export const getAuthToken = () => localStorage.getItem('access_token');

export const isAuthenticated = () => {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  const notExpired = new Date().getTime() < expiresAt;
  return notExpired && !!getAuthToken();
};

export const getProfileFromToken = (token = getAuthToken()) =>
  new Promise((res, rej) => {
    lock.getUserInfo(token, (error, profile) => {
      if (error) rej(error);
      res(profile);
    });
  });

export const onAuthenticated = () =>
  new Promise((res, rej) => {
    lock.on('authenticated', authResult => {
      setSession(authResult);
      getProfileFromToken(authResult.accessToken)
        .then(res)
        .catch(rej);
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
