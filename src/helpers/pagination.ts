export function paginate(pageId: string, length: number) {
  const page = pageId ? parseInt(pageId) : 1;
  const maxPage = Math.ceil(length / 10);
  const [startIdx, closeIdx] = calcPostsToDisplay(length);

  function calcPostsToDisplay(length: number) {
    const lastIdx = length - 1;
    let startIdx;
    let closeIdx;

    if (page === 1) {
      startIdx = lastIdx;
      closeIdx = lastIdx - page * 10;
    } else {
      startIdx = lastIdx - (page - 1) * 10;
      closeIdx = lastIdx - page * 10;
    }
    return [startIdx, closeIdx];
  }

  return { page, maxPage, startIdx, closeIdx };
}

// export function paginate(
//   totalItems: number,
//   currentPage = 1,
//   pageSize = 10,
//   maxPages = 10
// ) {
//   const totalPages = Math.ceil(totalItems / pageSize);

//   if (currentPage < 1) {
//     currentPage = 1;
//   } else if (currentPage > totalPages) {
//     currentPage = totalPages;
//   }

//   let startPage: number, endPage: number;
//   if (totalPages <= maxPages) {
//     startPage = 1;
//     endPage = totalPages;
//   } else {
//     const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
//     const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
//     if (currentPage <= maxPagesBeforeCurrentPage) {
//       startPage = 1;
//       endPage = maxPages;
//     } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
//       startPage = totalPages - maxPages + 1;
//       endPage = totalPages;
//     } else {
//       startPage = currentPage - maxPagesBeforeCurrentPage;
//       endPage = currentPage + maxPagesAfterCurrentPage;
//     }
//   }

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

//   const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
//     (i) => startPage + i
//   );

//   return {
//     totalItems,
//     currentPage,
//     pageSize,
//     totalPages,
//     startPage,
//     endPage,
//     startIndex,
//     endIndex,
//     pages,
//   };
// }
