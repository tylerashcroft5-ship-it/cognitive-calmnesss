// Wraps every route change in a soft fade-up. Server component on purpose —
// the .page-enter animation runs in CSS and respects reduced motion.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
