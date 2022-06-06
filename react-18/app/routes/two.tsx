import { Link } from "@remix-run/react";

export default function PageTwo() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Two</h1>
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/one">Page one</Link>
      </div>
    </div>
  );
}
