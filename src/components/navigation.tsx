import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/scroll-to-top";

export type Navigation = {
  currentPage: number;
  pages: number[];
  lastPage: number;
  firstPage: number;
};

export const Navigation: React.VFC<{ navigation: Navigation }> = ({
  navigation: { currentPage, pages, lastPage, firstPage },
}) => (
  <div className="navigation">
    <ScrollToTop />
    <div className="page-navigation" onClick={() => window.scrollTo(0, 0)}>
      <Link to={`/page/${firstPage}`}>
        {currentPage != 1 ? "←←First" : null}
      </Link>
      <Link to={`/page/${currentPage - 1}`}>
        {currentPage != 1 ? "←Previous" : null}
      </Link>
      <Link to={`/page/${currentPage + 1}`}>
        {currentPage < pages[pages.length - 1] ? "Next→" : null}
      </Link>
      <Link to={`/page/${lastPage}`}>
        {" "}
        {currentPage < pages[pages.length - 1]! ? "Last→→" : null}
      </Link>
    </div>
    <div className="page-navigation" onClick={() => window.scrollTo(0, 0)}>
      {pages.map((page, idx) => (
        <Link to={`/page/${page}`} key={idx}>
          <span className={page === currentPage ? "currentPage" : ""}>
            {page}
          </span>
        </Link>
      ))}
    </div>
  </div>
);
