export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
};

export const reduxFirebaseConfig = {
  userProfile: 'users',
  enableLogging: false,
  updateProfileOnLogin: true,
  useFirestoreForProfile: true,
};

export const firebaseSettings = {
  timestampsInSnapshots: true,
};

console.log('test', process.env.AUTH_DOMAIN, process.env.PROJECT_ID)