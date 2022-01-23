import { useMemo } from "react";
import { Link } from "react-router-dom";
import { paginate } from "../../helpers/pagination";
import { ScrollToTop } from "../scroll-to-top";

export default (totalItems: number, pageId: string | null) => {
  const pagination = useMemo(
    () => paginate(totalItems, pageId ? parseInt(pageId) : undefined),
    [totalItems, pageId]
  );

  const PageNavigation = () => (
    <div className="navigation">
      <ScrollToTop />
      <div className="page-navigation">
        <Link to={`/page/${pagination.firstPage}`}>{"←←First"}</Link>
        <Link to={`/page/${pagination.currentPage - 1}`}>
          {pagination.currentPage != 1 ? "←Previous" : null}
        </Link>
        {pagination.pages.map((page, idx) => (
          <Link to={`/page/${page}`} key={idx}>
            <span
              className={page === pagination.currentPage ? "currentPage" : ""}
            >
              {page}
            </span>
          </Link>
        ))}
        <Link to={`/page/${pagination.currentPage + 1}`}>
          {pagination.currentPage < pagination.pages.at(-1)! ? "Next→" : ""}
        </Link>
        <Link to={`/page/${pagination.lastPage}`}>{"Last→→"}</Link>
      </div>
    </div>
  );

  return { pagination, PageNavigation };
};
