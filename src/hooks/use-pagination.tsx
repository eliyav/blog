import { useMemo } from "react";
import { paginate } from "../helpers/pagination";

export const usePagination = (totalItems: number, pageId: string | null) => {
  const pagination = useMemo(
    () => paginate(totalItems, pageId ? parseInt(pageId) : undefined),
    [totalItems, pageId]
  );
  const pageNavigation = useMemo(
    () => ({
      currentPage: pagination.currentPage,
      firstPage: pagination.firstPage,
      lastPage: pagination.lastPage,
      pages: pagination.pages,
    }),
    [pagination]
  );
  return { pagination, pageNavigation };
};
