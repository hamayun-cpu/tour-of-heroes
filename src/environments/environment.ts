import packageInfo from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: packageInfo.domain,
    clientId: packageInfo.clientId,
    redirectUri: window.location.origin
  }
};
