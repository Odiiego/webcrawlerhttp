function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
  return hostPath.slice(-1) === '/' ? hostPath.slice(0, -1) : hostPath;
}

module.exports = {
  normalizeURL,
};
