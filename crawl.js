const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll('a');
  for (const linkElement of linkElements) {
    const url =
      linkElement.href.slice(0, 1) === '/'
        ? baseURL + linkElement.href
        : linkElement.href;
    try {
      const urlObj = new URL(url);
      urls.push(urlObj.href);
    } catch (err) {
      console.log(`error with the url: "${err.message}"`);
    }
  }
  return urls;
}

function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
  return hostPath.slice(-1) === '/' ? hostPath.slice(0, -1) : hostPath;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
};
