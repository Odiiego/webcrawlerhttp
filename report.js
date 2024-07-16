function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  return pagesArr.sort((a, b) => b[1] - a[1]);
}

module.exports = { sortPages };
