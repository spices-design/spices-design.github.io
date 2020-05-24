const SPICES = 'spices';
const SALT = 'salt';
const PEPPER = 'pepper';
const GINGER = 'ginger';

export default () => {
  // Domains list:
  // - spices.(local|design) => spices
  // - pepper.spices.(local|design) => pepper
  // - salt.spices.(local|design) => salt
  // - ginger.spices.(local|design) => ginger

  let ret = SPICES;
  
  const host = window.location.host.split('.');
  if (host.length === 3 && [SALT, PEPPER, GINGER].includes(host[0]) ){
    ret = host[0];
  }

  return ret;
}