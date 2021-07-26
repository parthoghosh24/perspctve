export const getUrlWithQueryParams = (base,params) => {
  const query = Object.entries(params).map(([key,value])=>`${key}=${encodeURIComponent(value)}`).join('&');
  return `${base}?${params}`;
}