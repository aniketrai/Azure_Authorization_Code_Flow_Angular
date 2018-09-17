export const environment = {
  production: true,
  adalConfig: {
    tenant: 'aniketrai2mindtree.onmicrosoft.com',
    clientId: '2cc19000-7eec-4db6-8ba6-5e857b813cb2',
    // redirectUri: window.location.origin + '/',
    // tenant: 'shekarmindtree.onmicrosoft.com',
    // clientId: 'da034923-466e-41c8-baa1-89249b95a984',
    postLogoutRedirectUri: 'http://localhost:4200',
    cacheLocation: 'localStorage'
  }
};
