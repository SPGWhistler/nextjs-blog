export function debounce(cb) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      cb(...args);
    }, 250);
  };
};

export function truncateText (text, characters) {
  return text.length > characters ? text.slice(0, characters - 1).trim() + String.fromCharCode(0x2026) : text;
};

export function getQueryParam (paramName) {
  let output;
  try {
    let urlParams = window.location.search.substring(1)
      .split('&')
      .reduce((allParams, currParam) => {
        currParam = currParam.split('=');
        allParams[currParam[0]] = currParam[1];
        return allParams;
      }, {});
    if (urlParams && urlParams[paramName]) {
      output = decodeURIComponent(urlParams[paramName]).replace(/\+/g, ' ');
    }
  } catch (ignored) {}
  return output;
}

export function cleanPageNumber(dirtyInput) {
  let parsed = Number.parseInt(dirtyInput, 10);
  parsed = (Number.isNaN(parsed)) ? 1 : parsed;
  if (parsed < 1) return 1;
  if (parsed > 100) return 100;
  return parsed;
}