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
      <Link to={`/page/${firstPage}`}>←←First</Link>
      <Link to={`/page/${currentPage - 1}`}>
        {currentPage != 1 ? "←Previous" : null}
      </Link>
      <Link to={`/page/${currentPage + 1}`}>
        {currentPage < pages.at(-1)! ? "Next→" : ""}
      </Link>
      <Link to={`/page/${lastPage}`}>Last→→</Link>
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
