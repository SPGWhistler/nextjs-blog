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