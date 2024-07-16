function printReport(pages) {
  console.log(`--------------------\n       REPORT\n--------------------`);
  const sortedPages = sortPages(pages);
  const strLen = String(sortedPages[0][1]).length;
  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const hits = sortedPage[1];
    console.log(
      `Found ${String(hits).padStart(strLen, ' ')} links to page: ${url}`,
    );
  }
  console.log(`--------------------\n   END REPORT\n--------------------`);
}

function sortPages(pages) {
  const pagesArr = Object.entries(pages);
  return pagesArr.sort((a, b) => b[1] - a[1]);
}

module.exports = { printReport, sortPages };
