export const setGrantTypePassword = data => {
  return `grant_type=password&username=${data.username}&password=${data.password}`;
};
