export function calcPageRequirements(pageId: string, length: number) {
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

  return [page, maxPage, startIdx, closeIdx];
}
