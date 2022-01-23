export const ScrollToTop = () => (
  <p className="scroll-top">
    <span onClick={() => window.scrollTo(0, 0)}>↑ Go to top ↑</span>
  </p>
);
